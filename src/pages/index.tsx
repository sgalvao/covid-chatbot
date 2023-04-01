import Head from "next/head";
import { Inter } from "next/font/google";
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
