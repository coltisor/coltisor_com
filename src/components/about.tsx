import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useIsoEffect } from "../hooks/useIsoEffect";
import { ___ } from "@utils/translate";
gsap.registerPlugin(ScrollTrigger);

type AboutProps = {
  lang?: "ro" | "en";
};

export default function About(props: AboutProps) {
  const { lang } = props;
  const ctxRef = useRef(null);

  useIsoEffect(() => {
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
      className="flex min-h-screen w-screen flex-col items-center justify-center gap-10 p-10 max-md:my-[15vh]"
    >
      <p className="max-w-[512px] text-justify text-2xl">
        {___(
          "Greetings, my name is Victor Coltisor and I am a pasionate and creative web developer. With over 5 years of professional experience in the field, I possess a strong skillset in both frontend and backend technologies. I currently serve as a Lead Engineer at %companyName%.",
          lang,
          {
            "%companyName%": (
              <Link
                href="https://www.rankingcoach.com/"
                className="opacity-50 transition-all hover:underline hover:opacity-100"
                target="_blank"
                rel="noreferrer"
              >
                RankingCoach
              </Link>
            ),
          }
        )}
      </p>
      <p className="max-w-[512px] text-justify text-2xl">
        {___(
          "I am always eager to learn and discuss industry advancements in technologies such as React & Typescript, HTML & CSS, Node & SQL, as well as new business and startup opportunities.",
          lang
        )}
      </p>
      <p className="max-w-[512px] text-justify text-2xl">
        {___(
          "If you have a project that aligns with my skill set and interests, please do not hesitate to contact me at %emailAddress% for further discussion. Thank you for your consideration.",
          lang,
          {
            "%emailAddress%": (
              <Link
                href="mailto:coltisor@victor.com"
                className="opacity-50 transition-all hover:underline hover:opacity-100"
              >
                victor@coltisor.com
              </Link>
            ),
          }
        )}
      </p>
    </section>
  );
}
