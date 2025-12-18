import React from "react";
import { Link } from "react-router-dom";

const Page1Button = () => {
  return (
    <div
      className="
        absolute inset-x-0 bottom-0
        px-4 sm:px-6 lg:px-16 pb-4 sm:pb-6 lg:pb-10
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col-reverse lg:flex-row
          items-center lg:items-end
          justify-between
          gap-4 sm:gap-6
        "
      >
        {/* TEXT */}
        <div className="text-center lg:text-left">
          <h2
            className="
              font-[anzo2] text-gray-600
              text-xs sm:text-base md:text-lg lg:text-xl absolute right-32 bottom-20
              leading-snug
            "
          >
            Fix dark images, improve detail, and increase
            <br className="hidden sm:block" />
            contrast and brightness with our
            <br className="hidden sm:block" />
            easy image enhancer …
          </h2>
        </div>

        {/* BUTTON */}
        <Link
          to="/uploadImage"
          className="
            inline-flex items-center justify-center
            w-40 sm:w-44 lg:w-48
            h-9 sm:h-11 lg:h-12
            bg-black rounded-2xl
            text-slate-50 font-medium
            text-xs sm:text-sm
            hover:text-cyan-200
            transition
          "
        >
          TRY Pixel Vision
        </Link>
      </div>
    </div>
  );
};

export default Page1Button;
