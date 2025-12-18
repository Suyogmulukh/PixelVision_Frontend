import React from "react";
import { Link } from "react-router-dom";

const Page2Button = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full p-3 sm:p-6 md:p-10 flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-4 sm:gap-6">
      <Link
        to="/user-login"
        className="w-36 sm:w-44 h-10 sm:h-12 flex items-center justify-center bg-black rounded-2xl font-semibold text-gray-100 text-xs sm:text-sm hover:bg-gray-700 transition lg:absolute lg:ml-[1200px] lg:mb-[480px]"
      >
        TRY Pixel Vision
      </Link>

      {/* LEFT BRAND TEXT */}
      <div className="text-center lg:text-left px-2">
        <h2 className="text-xs sm:text-base md:text-lg lg:text-xl font-[anzo2] text-gray-700 lg:ml-14">
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-[anzo3] text-black lg:ml-14">
          @PIXEL VISION
        </h3>
      </div>

      {/* RIGHT DESCRIPTION */}
      <div className="text-center lg:text-left lg:mb-16 lg:mr-28 px-2">
        <h2 className="text-xs sm:text-base md:text-lg lg:text-xl font-[anzo2] text-gray-600 leading-snug ">
          Fix dark images, improve detail, and increase
          <br className="hidden sm:block" />
          contrast and brightness with our
          <br className="hidden sm:block" />
          easy image enhancer ...
        </h2>
      </div>

      {/* BOTTOM BUTTON */}
      <Link
        to="/user-login"
        className="w-36 sm:w-44 h-10 sm:h-12 flex items-center justify-center bg-black rounded-2xl text-slate-50 text-xs sm:text-sm font-medium hover:bg-gray-700 transition lg:absolute lg:ml-[1000px] lg:mb-2"
      >
        TRY Pixel Vision
      </Link>
    </div>
  );
};

export default Page2Button;
