import type { NextApiRequest, NextApiResponse } from "next"
import { filter } from "@/utils/word-filter"

export const config = {
  runtime: "edge",
}

export default async function handler(
  _request: NextApiRequest,
  response: NextApiResponse
) {
  const maskedText = filter(
    "He slipped and fell on his butt. Well, that wasn't very sexy."
  )

  response.status(200).json({ text: maskedText })
}
