import type { NextApiRequest, NextApiResponse } from "next"
import { filter } from "@/utils/word-filter"

export const config = {
  runtime: "edge",
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const maskedText = filter(request.body.text)
  response.status(200).json({ text: maskedText })
}
