import Head from "next/head"
import { filter } from "@/utils/word-filter"

interface HomeProps {
  maskedText: string
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Text with Filtered Words</title>
      </Head>
      <div>
        <h1>Text with Filtered Words</h1>
        <p>{props.maskedText}</p>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const text = await filter(
    "He slipped and fell on his butt. Well, that wasn't very sexy."
  )
  return { props: { text } }
}
