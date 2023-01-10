import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

export default function Home() {
  const bodyRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#fullName", { opacity: 0 });
      gsap.to("#fullName", { opacity: 1, duration: 1.3 });

      gsap.set("#profession", { opacity: 0 });
      gsap.to("#profession", { opacity: 1, duration: 1.3, delay: 0.3 });

      gsap.set("#whenWhere", { opacity: 0 });
      gsap.to("#whenWhere", { opacity: 1, duration: 1.3, delay: 0.6 });
    }, bodyRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Coltisor Victor - Software Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/bigilla"
          rel="stylesheet"
        ></link>
      </Head>

      <main
        ref={bodyRef}
        className={"flex h-screen items-center justify-center bg-slate-800"}
      >
        <div
          id="headingContainer"
          className={"text-center font-serif text-white"}
        >
          <h1 id="fullName">Coltisor Victor</h1>
          <h1 id="profession">Web Developer</h1>
          <h1 id="whenWhere">Timisoara 2023</h1>
        </div>
      </main>
    </>
  );
}
