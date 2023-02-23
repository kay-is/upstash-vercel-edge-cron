import { Redis } from "@upstash/redis"
import { useEffect, useState } from "react"

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

export function useFilter(text: string) {
  const [maskedText, setMaskedText] = useState("")

  useEffect(() => {
    async function run() {
      const maskedText = await filter(text)
      setMaskedText(maskedText)
    }

    run()
  }, [text])

  return maskedText
}
