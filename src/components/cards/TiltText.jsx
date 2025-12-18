import React from "react";

const TiltText = ({ abc }) => {
  return (
    <div
      id="tiltDiv"
      ref={abc}
      className="text-center lg:text-left px-3 sm:px-6 lg:px-0 lg:-mt-20"
    >
      {/* TOP LINE */}
      <h1
        className="
          uppercase font-[anzo2] text-gray-500
          text-[6vw] leading-[7vw]
          sm:text-[4.5vw] sm:leading-[5.5vw]
          lg:text-[3.5vw] lg:leading-[4vw]
        "
      >
        Improve{" "}
        <span className="relative text-primary font-[anzo4]">
          Image
          <span
            className="
              absolute -top-2 right-[-1.2rem]
              text-gray-600 font-[anzo3]
              text-xs sm:text-sm md:text-lg lg:text-2xl
            "
          >
            ™
          </span>
        </span>
      </h1>

      {/* MAIN TITLE */}
      <h1
        className="
          uppercase font-[anzo1] text-gray-700
          text-[18vw] leading-[14vw]
          sm:text-[14vw] sm:leading-[11vw]
          lg:text-[11vw] lg:leading-[8vw]
          my-1
        "
      >
        Enhancer
      </h1>

      {/* BOTTOM LINE */}
      <h1
        className="
          uppercase font-[anzo2] text-gray-500
          text-[6vw] leading-[7vw]
          sm:text-[4.5vw] sm:leading-[5.5vw]
          lg:text-[3.5vw] lg:leading-[4vw]
        "
      >
        in seconds.
      </h1>
    </div>
  );
};

export default TiltText;
