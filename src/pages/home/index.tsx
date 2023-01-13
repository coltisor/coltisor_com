import Head from "next/head";
import { useEffect, useState } from "react";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coltisor Victor - Software Developer</title>
        <meta name="description" content="Welcome to my personal website" />
      </Head>

      <main className="overflow-x-hidden">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}
