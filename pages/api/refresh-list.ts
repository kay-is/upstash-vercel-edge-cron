import { Redis } from "@upstash/redis"

export const config = {
  runtime: "edge",
}

const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
})

export default async function handler() {
  const wordResponse = await fetch(
    "https://raw.githubusercontent.com/kay-is/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/master/en"
  )
  const words = await wordResponse.text()

  const redisCommands = redisClient.pipeline()
  words.split("\n").forEach((word) => redisCommands.sadd("words", word))
  await redisCommands.exec()
}
