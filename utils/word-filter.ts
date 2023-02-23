import { Redis } from "@upstash/redis"

const redisClient = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
})

export async function filter(text: string) {
  const filteredWords = await redisClient.smembers("words")

  let maskedText = text
  for (let word of filteredWords)
    maskedText = maskedText.replaceAll(new RegExp(word, "gi"), "[REDACTED]")

  return maskedText
}
