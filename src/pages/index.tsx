import Head from "next/head";
import { Homepage } from "@/components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChatBol - tudo sobre futebol</title>
      </Head>
      <Homepage />
    </>
  );
}
