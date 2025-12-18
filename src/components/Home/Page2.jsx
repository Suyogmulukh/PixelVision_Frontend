import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

useGSAP(() => {
  const mm = gsap.matchMedia();

  // ✅ DESKTOP (UNCHANGED)
  mm.add("(min-width: 768px)", () => {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        start: "top 60%",
        end: "top -270%",
        scrub: 2,
      },
    });
  });

  // ✅ MOBILE / TABLET (ONLY VALUES CHANGE)
  mm.add("(max-width: 767px)", () => {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 0.8,
      stagger: 0.6,
      scrollTrigger: {
        trigger: ".rotateText",
        start: "top 30%",
        end: "top -70%",
        scrub: 1,
      },
    });
  });

  return () => mm.revert();
});

  return (
    <div
      id="section2"
      className="
        bg-cyan-50 text-center text-black
        p-4 sm:p-6 lg:p-10
        min-h-screen
        flex flex-col items-center
      "
    >
      <h3
        className="
        text-gray-500 font-[anzo]
        text-xs sm:text-base lg:text-xl
      "
      >
        Ⓒsuyog | designed and developed
      </h3>

      <div className="rotateText mt-12 sm:mt-24">
        <h1
          className="
          font-[anzo1] uppercase text-black
          text-[32vw] sm:text-[20vw] lg:text-[42vw]
          sm:leading-[12vw] lg:leading-[35vw] leading-[35vw]
        "
        >
          IMPACTFUL
        </h1>
      </div>

      <div className="rotateText">
        <h1
          className="
          font-[anzo1] uppercase text-black
          text-[30vw] sm:text-[16vw] lg:text-[42vw]
          sm:leading-[12vw] lg:leading-[35vw] leading-[35vw]
        "
        >
          Enhances
        </h1>
      </div>

      <div className="rotateText">
        <h1
          className="
          font-[anzo1] uppercase text-black
          text-[30vw] sm:text-[16vw] lg:text-[42vw]
          sm:leading-[12vw] lg:leading-[35vw] leading-[35vw]
        "
        >
          IS THE
        </h1>
      </div>

      <div className="rotateText">
        <h1
          className="
          font-[anzo1] uppercase text-black
          text-[30vw] sm:text-[16vw] lg:text-[42vw]
           sm:leading-[12vw] lg:leading-[35vw] leading-[35vw]
        "
        >
          THAT
        </h1>
      </div>

      <div className="rotateText">
        <h1
          className="
          font-[anzo1] uppercase text-black
          text-[30vw] sm:text-[16vw] lg:text-[42vw]
          leading-[20vw] sm:leading-[12vw] lg:leading-[35vw]
        "
        >
          WORKS
        </h1>
      </div>
    </div>
  );
};

export default Page2;
