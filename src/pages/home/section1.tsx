import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { getRandomGreeting } from "@utils/greetings";

export default function Section1() {
  const ctxRef = useRef(null);

  const [subjectVisible, setSubjectVisible] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    setGreeting(getRandomGreeting(hours));
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      /**
       * Heading In
       */
      const t = gsap.timeline();

      t.set("#menu", { opacity: 0, y: -24 });
      t.set("#fullName", { opacity: 0 });
      t.set("#profession", { opacity: 0 });
      t.set("#whenWhere", { opacity: 0 });
      t.set(".portrait", { y: -100, opacity: 0 });
      t.set(".portrait", { scale: 1.1 });
      t.set("#portraitSubject", { opacity: 0 });

      t.to("#fullName", { opacity: 1, duration: 0.25, delay: 0.25 }, "<");
      t.to("#profession", { opacity: 1, duration: 0.25, delay: 0.25 }, "<");
      t.to("#whenWhere", { opacity: 1, duration: 0.25, delay: 0.25 }, "<");

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
       * Heading Out - Y axis
       */
      gsap.to("#fullName", {
        y: -150,
        scrollTrigger: {
          trigger: "#heading",
          start: "50% center",
          end: "25% 100px",
          scrub: true,
          markers: false,
          id: "fullName",
        },
      });
      gsap.to("#profession", {
        y: -150,
        scrollTrigger: {
          trigger: "#heading",
          start: "75% center",
          end: "50% 100px",
          scrub: true,
          markers: false,
          id: "profession",
        },
      });
      gsap.to("#whenWhere", {
        y: -150,
        scrollTrigger: {
          trigger: "#heading",
          start: "100% center",
          end: "75% 100px",
          scrub: true,
          markers: false,
          id: "whenWhere",
        },
      });

      /**
       * Heading Out - Opacity
       */
      gsap.fromTo(
        "#fullName",
        {
          opacity: 1,
          scrollTrigger: {
            trigger: "#heading",
            start: "50% center",
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
            start: "50% center",
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
            start: "75% center",
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
            start: "75% center",
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
            start: "100% center",
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
            start: "100% center",
            end: "75% 100px",
            scrub: true,
            markers: false,
            id: "whenWhere",
          },
        }
      );

      /**
       * Greeting
       */
      gsap.set("#greeting", { opacity: 0 });
      gsap.to("#greeting", {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#greeting",
          start: "top center",
          scrub: false,
          markers: false,
          id: "greetingIn",
          once: true,
        },
      });

      gsap.to("#greeting", {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#greeting",
          start: "bottom top",
          scrub: false,
          markers: false,
          id: "greetingOut",
          once: true,
        },
      });
    }, ctxRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ctxRef}
      className="flex h-screen w-screen items-center justify-center"
    >
      <div
        id="menu"
        className="absolute top-0 mt-6 flex w-full max-w-[90vw] justify-between font-medium uppercase opacity-80 will-change-[opacity]"
      >
        <span>Portfolio © 2023</span>
        <span>EN</span>
      </div>

      <div
        id="heading"
        className="z-10 text-center font-serif text-[13vw] will-change-[opacity] [line-height:13vw] md:text-[10vw] md:[line-height:10vw]"
      >
        <h1 id="fullName">Victor</h1>
        <h1 id="profession">Web Developer</h1>
        <h1 id="whenWhere">Timisoara</h1>
      </div>

      <div className="absolute bottom-[10vh] z-0 flex h-[80vh] w-[600px] items-end justify-center overflow-hidden will-change-[opacity]">
        <Image
          id="portrait_bg"
          src="/portrait_ai.jpg"
          alt=""
          width="600"
          height="600"
          className="portrait max-h-[80vh] max-w-[80vw]"
        />
      </div>

      <div className="absolute bottom-[10vh] z-20 flex h-[80vh] w-[600px] items-end justify-center overflow-hidden will-change-[opacity]">
        <Image
          id="portraitSubject"
          src="/portrait_ai_subject.png"
          alt=""
          width="600"
          height="600"
          className={`portrait max-h-[80vh] max-w-[80vw] transition-opacity will-change-[opacity]`}
          style={{ opacity: subjectVisible ? 1 : 0 }}
          onMouseEnter={() => setSubjectVisible(true)}
          onMouseLeave={() => setSubjectVisible(false)}
        />
      </div>

      <h3 id="greeting" className="absolute bottom-0 mb-4 text-3xl md:text-5xl">
        {greeting}
      </h3>
    </section>
  );
}
