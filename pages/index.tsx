import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coltisor Victor - Software Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={"flex h-screen items-center justify-center bg-slate-800"}
      >
        <h1 className={"text-white"}>Coltisor Victor</h1>
      </main>
    </>
  );
}
