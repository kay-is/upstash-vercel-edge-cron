import Head from "next/head"
import { useFilter } from "@/utils/word-filter"

export default function Home() {
  const maskedText = useFilter(
    "He slipped and fell on his butt. Well, that wasn't very sexy."
  )

  return (
    <>
      <Head>
        <title>Text with Filtered Words</title>
      </Head>
      <div>
        <h1>Text with Filtered Words</h1>
        <p>{maskedText}</p>
      </div>
    </>
  )
}
