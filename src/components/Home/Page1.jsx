import React, { useRef, useState } from "react";
import Page1Button from "../cards/Page1Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../cards/TiltText";
import Navbar from "../inputs/Navbar";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  const mouseMoving = (e) => {
    // Disable tilt on touch devices
    if (window.innerWidth < 1024) return;
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    setXVal((e.clientX - rect.left - rect.width / 2) / 50);
    setYVal(-(e.clientY - rect.top - rect.height / 2) / 15);
  };

  useGSAP(() => {
    if (!tiltRef.current) return;

    gsap.to(tiltRef.current, {
      rotateX: yVal,
      rotateY: xVal,
      duration: 1.2,
      ease: "power4.out",
    });
  }, [xVal, yVal]);

  return (
    <section
      id="page1"
      onMouseMove={mouseMoving}
      className="
        min-h-screen
        bg-cyan-50
        px-3 sm:px-6 lg:px-10
        py-4 sm:py-6
      "
    >
      <div
        className="
          relative
          min-h-[85vh]
          w-full
          rounded-2xl sm:rounded-3xl
          bg-gray-300
          shadow-2xl shadow-gray-700
          overflow-hidden
          px-4 sm:px-10 lg:px-24
          py-6 sm:py-10 lg:py-14
          flex flex-col
        "
      >
        {/* NAVBAR */}
        <Navbar userInfo={userInfo} />

        {/* HERO CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          <TiltText abc={tiltRef} />
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-10">
          <Page1Button />
        </div>

        {/* BACKGROUND ILLUSTRATION (DESKTOP ONLY) */}
        <div
          className="
            absolute
            left-10 top-32 lg:left-10
            h-40 w-52
            sm:h-48 sm:w-56
            lg:h-80 lg:w-[45%]
            bg-cover bg-center
            pointer-events-none
          "
          style={{
            backgroundImage:
              "url(https://smashinglogo.com/static/img/illustrations/logo-builder.webp)",
          }}
        />
      </div>
    </section>
  );
};

export default Page1;
