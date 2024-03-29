import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import { getRandomGreeting } from "@utils/greetings";
import { useIsoEffect } from "@hooks/useIsoEffect";
import { Breakpoints } from "@styles/breakpoints";
import { ___ } from "@utils/translate";
import Link from "next/link";

type HeaderProps = {
  lang?: "ro" | "en";
};

export default function Header(props: HeaderProps) {
  const { lang } = props;
  const ctxRef = useRef(null);

  const [hydrated, setHydrated] = useState(false);
  const [subjectVisible, setSubjectVisible] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setHydrated(true);

    const hours = new Date().getHours();
    setGreeting(getRandomGreeting(hours));
  }, []);

  useIsoEffect(() => {
    const mm = gsap.matchMedia(ctxRef);
    mm.add(
      {
        isDesktop: `(min-width: ${Breakpoints.md}px)`,
        isMobile: `(max-width: ${Breakpoints.md - 1}px)`,
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions as {
          isMobile: boolean;
          isDesktop: boolean;
        };

        /**
         * Heading In
         */
        const t = gsap.timeline();

        t.set("#menu", { opacity: 0, y: -24 });
        t.set("#heading>h1", { opacity: 0 });
        t.set(".portrait", { y: -100, opacity: 0, scale: 1.1 });
        t.set("#portraitSubject", { opacity: 0 });
        t.set("#greeting", { opacity: 0 });

        t.to("#heading>h1", { opacity: 1, duration: 0.25, stagger: 0.25 });
        t.to(".portrait", { y: 0, duration: 0.8, delay: 0.15 });
        t.to(".portrait", { opacity: 1, y: 0, duration: 0.8 }, "<");
        t.to("#menu", { opacity: 1, y: 0, duration: 0.8 }, "<");
        t.to("#portraitSubject", { opacity: 1 }, "<");

        t.to("#portraitSubject", {
          opacity: 0,
          duration: 0.3,
          delay: 0.3,
        });
        t.to(".portrait", { scale: 1, duration: 0.2, delay: 0.1 }, "<");
        t.to(".portrait", { scale: 1.05, duration: 0.15 });

        /**
         * Greeting - Reveal @todo
         */
        gsap.fromTo(
          "#greeting",
          {
            opacity: 0,
            scrollTrigger: {
              trigger: "#greeting",
              start: "top center",
              end: "bottom top",
              scrub: true,
              markers: false,
              id: "greeting",
              once: true,
            },
          },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: "#greeting",
              start: "top center",
              end: "bottom top",
              scrub: true,
              markers: false,
              id: "greeting",
              once: true,
            },
          }
        );

        /**
         * Heading Out - XY
         */
        gsap.to("#fullName", {
          y: isDesktop ? -150 : undefined,
          x: isMobile ? -100 : undefined,
          ease: "circ.easeIn",
          scrollTrigger: {
            trigger: "#heading",
            start: "50% 45%",
            end: isMobile ? "bottom top" : "70% top",
            scrub: true,
            markers: false,
            id: "fullName",
          },
        });
        gsap.to("#profession", {
          y: isDesktop ? -150 : undefined,
          x: isMobile ? 100 : undefined,
          ease: "circ.easeIn",
          scrollTrigger: {
            trigger: "#heading",
            start: isMobile ? "50% 45%" : "75% center",
            end: isMobile ? "bottom top" : "95% top",
            scrub: true,
            markers: false,
            id: "profession",
          },
        });
        gsap.to("#whenWhere", {
          y: isDesktop ? -150 : undefined,
          x: isMobile ? -100 : undefined,
          ease: "circ.easeIn",
          scrollTrigger: {
            trigger: "#heading",
            start: isMobile ? "50% 45%" : "100% center",
            end: isMobile ? "bottom top" : "120% top",
            scrub: true,
            markers: false,
            id: "whenWhere",
          },
        });

        /**
         * Heading Out - Opacity
         */
        if (isDesktop) {
          gsap.fromTo(
            "#fullName",
            {
              opacity: 1,
              scrollTrigger: {
                trigger: "#heading",
                start: "50% 45%",
                end: "25% 100px",
                scrub: true,
                markers: false,
                id: "fullName",
              },
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: "#heading",
                start: "50% 45%",
                end: "25% 100px",
                scrub: true,
                markers: false,
                id: "fullName",
              },
            }
          );
          gsap.fromTo(
            "#profession",
            {
              opacity: 1,
              scrollTrigger: {
                trigger: "#heading",
                start: "75% 45%",
                end: "50% 100px",
                scrub: true,
                markers: false,
                id: "profession",
              },
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: "#heading",
                start: "75% 45%",
                end: "50% 100px",
                scrub: true,
                markers: false,
                id: "profession",
              },
            }
          );
          gsap.fromTo(
            "#whenWhere",
            {
              opacity: 1,
              scrollTrigger: {
                trigger: "#heading",
                start: "100% 45%",
                end: "75% 100px",
                scrub: true,
                markers: false,
                id: "whenWhere",
              },
            },
            {
              opacity: 0,
              scrollTrigger: {
                trigger: "#heading",
                start: "100% 45%",
                end: "75% 100px",
                scrub: true,
                markers: false,
                id: "whenWhere",
              },
            }
          );

          document.addEventListener("mousemove", animateHeadingPerspective);
        }
      }
    );

    return () => {
      mm.revert();
      document.removeEventListener("mousemove", animateHeadingPerspective);
    };
  }, []);

  /**
   * Heading perspective to follow mousemove
   */
  const animateHeadingPerspective = (event: MouseEvent) => {
    let xPos = event.clientX / window.innerWidth - 0.5;
    let yPos = event.clientY / window.innerHeight - 0.5;

    gsap.to("#heading", {
      rotationY: 10 * xPos,
      rotationX: -10 * yPos,
      transformPerspective: 900,
      transformOrigin: "center",
    });
  };

  return (
    <section
      ref={ctxRef}
      className="relative flex h-screen w-screen flex-col items-center justify-between gap-5 p-5 transition-opacity"
      style={{ opacity: hydrated ? 1 : 0 }}
    >
      <div
        id="menu"
        className="flex w-full max-w-[90vw] justify-between font-medium uppercase opacity-80 will-change-[opacity]"
      >
        <span className="hover:cursor-default">
          {___("%star% Coltisor", lang, { "%star%": "✦" })}
        </span>
        <div className="flex gap-1">
          <Link href="/" className="hover:cursor-pointer">
            En
          </Link>
          <span>–</span>
          <Link href="/ro" className="hover:cursor-pointer">
            Ro
          </Link>
        </div>
      </div>

      <div
        id="heading"
        className="z-10 select-none pb-[5vh] text-center font-display text-[12vw] will-change-[opacity] [line-height:13vw] md:pb-[10vh] md:text-[10vw] md:[line-height:10vw]"
      >
        <h1 id="fullName">Victor</h1>
        <h1 id="profession">
          <span className="md:hidden">Developer</span>
          <span className="hidden md:block">Web Developer</span>
        </h1>
        <h1 id="whenWhere">{___("Timisoara", lang)}</h1>
      </div>

      <div className="absolute bottom-[10vh] z-0 flex h-[80vh] w-[550px] max-w-[65vw] items-center justify-center overflow-hidden will-change-[opacity]">
        <Image
          priority={true}
          id="portrait_bg"
          src="/pic.jpg"
          alt=""
          className="portrait pointer-events-none max-h-[80vh] max-w-[80vw] select-none object-contain grayscale-[100%]"
          fill
        />
      </div>

      <div className="absolute bottom-[10vh] z-20 flex h-[80vh] w-[550px] max-w-[65vw] items-center justify-center overflow-hidden will-change-[opacity]">
        <Image
          id="portraitSubject"
          src="/pic_fg.png"
          alt=""
          className={`portrait pointer-events-none max-h-[80vh] max-w-[80vw] select-none object-contain grayscale-[100%] transition-opacity will-change-[opacity]`}
          fill
          style={{ opacity: subjectVisible ? 1 : 0 }}
        />
        <svg
          width="600"
          height="1125"
          className="h-auto max-h-[80vh] max-w-[100%]"
          preserveAspectRatio="true"
          viewBox="0 0 600 1125"
        >
          <rect
            x="50"
            y="500"
            width="500"
            height="630"
            fill="red"
            opacity={0}
            onMouseEnter={() => setSubjectVisible(true)}
            onMouseLeave={() => setSubjectVisible(false)}
          />
        </svg>
      </div>

      <h2 id="greeting" className="text-3xl md:text-5xl">
        {greeting}
      </h2>
    </section>
  );
}
