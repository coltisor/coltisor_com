import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      /**
       * Heading In
       */
      gsap.from("p", {
        duration: 0.5,
        opacity: 0,
        y: -50,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "p",
          start: "top center",
          scrub: false,
          markers: false,
          id: "bio",
          once: true,
        },
      });
    }, ctxRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ctxRef}
      className="flex h-screen w-screen flex-col items-center justify-center gap-10"
    >
      <p className="max-w-[512px] text-justify text-2xl">
        Greetings, my name is Victor Coltisor and I am a pasionate and creative
        web developer. With over 4 years of professional experience in the
        field, I possess a strong skillset in both frontend and backend
        technologies. I currently serve as a Lead Engineer at&nbsp;
        <Link
          href="https://www.rankingcoach.com/"
          className="opacity-50 transition-all hover:underline hover:opacity-100"
          target="_blank"
          rel="noreferrer"
        >
          RankingCoach
        </Link>
        .
      </p>
      <p className="max-w-[512px] text-justify text-2xl">
        I am always eager to learn and discuss industry advancements in
        technologies such as React & Typescript, HTML & CSS, Node & SQL, as well
        as new business and startup opportunities.
      </p>
      <p className="max-w-[512px] text-justify text-2xl">
        If you have a project that aligns with my skill set and interests,
        please do not hesitate to contact me at&nbsp;
        <Link
          href="mailto:coltisor@victor.com"
          className="opacity-50 transition-all hover:underline hover:opacity-100"
        >
          victor@coltisor.com
        </Link>
        &nbsp;for further discussion. Thank you for your consideration.
      </p>
    </section>
  );
}