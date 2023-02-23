import type { NextApiRequest } from "next"
import { filter } from "@/utils/word-filter"

export const config = { runtime: "edge" }

export default async function handler(request: NextApiRequest) {
  const { text } = await new Response(request.body).json()
  console.log(text)
  const maskedText = await filter(text)
  return new Response(JSON.stringify({ text: maskedText }), {
    status: 200,
    headers: { "content-type": "application/json" },
  })
}
