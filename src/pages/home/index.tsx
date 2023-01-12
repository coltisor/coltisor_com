import Head from "next/head";
import Section1 from "./section1";
import Section2 from "./section2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coltisor Victor - Software Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-x-hidden text-white">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
}
