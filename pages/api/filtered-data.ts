import { filter } from "@/utils/word-filter"

export const config = { runtime: "edge" }

export default async function handler() {
  const maskedText = await filter(
    "He slipped and fell on his butt. Well, that wasn't very sexy."
  )

  return new Response(JSON.stringify({ text: maskedText }), {
    status: 200,
    headers: { "content-type": "application/json" },
  })
}
