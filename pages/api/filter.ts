import type { NextApiRequest } from "next"
import { filter } from "@/utils/word-filter"

export const config = { runtime: "edge" }

export default async function handler(request: NextApiRequest) {
  console.log(request.body)
  const maskedText = await filter(request.body.text)
  return new Response(JSON.stringify({ text: maskedText }), {
    status: 200,
    headers: { "content-type": "application/json" },
  })
}
