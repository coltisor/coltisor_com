import Head from "next/head";
import { useEffect, useState } from "react";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Head>
        <title>Coltisor Victor - Software Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="overflow-x-hidden"
        style={{ display: hydrated ? "block" : "none" }}
      >
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}
