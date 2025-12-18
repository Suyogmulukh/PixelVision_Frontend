import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Pages5 = () => {
  const dropDownRef = useRef(null);
  const textRefs = useRef([]);

  return (
    <section className="bg-cyan-50 w-full py-12 sm:py-24 px-4 sm:px-8 lg:px-16">
      {/* Footer note */}
      <h3
        className="
        text-gray-500 text-xs sm:text-sm lg:text-xl
        font-[anzo]
        text-center mb-8 sm:mb-12
      "
      >
        Ⓒ suyog | designed and developed
      </h3>

      <div
        className="
        max-w-3xl mx-auto
        flex flex-col lg:flex-row
        items-center
        gap-8 sm:gap-16 lg:gap-36 lg:mt-20
      "
      >
        {/* IMAGE STACK */}
        <div className="relative w-[160px] h-[260px] sm:w-[300px] sm:h-[420px] flex-shrink-0">
          <div
            className="
              absolute w-full h-full
              rounded-xl rotate-[-35deg]
              -top-1 -left-10
              shadow-xl bg-cover bg-right
            "
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/564x/cf/2f/15/cf2f15be9a1d91f3cd7191614512ba61.jpg)",
            }}
          >
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-800">
              AI GENERATED
            </span>
          </div>

          <div
            className="
              absolute w-full h-full
              rounded-xl rotate-[-16deg]
              -top-2 left-1
              shadow-xl bg-cover
            "
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QPOdq4i_keODQ-_xCC3Am5A9zFfOpTeI-A&s)",
            }}
          >
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-800">
              AI GENERATED
            </span>
          </div>

          <div
            className="
              absolute w-full h-full
              rounded-xl rotate-[14deg]
              top-6 left-12
              shadow-xl bg-cover bg-center
            "
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000)",
            }}
          >
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-800">
              AI GENERATED
            </span>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="text-center lg:text-left max-w-lg px-2">
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap">
            <span
              ref={(el) => (textRefs.current[0] = el)}
              className="bg-red-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase"
            >
              New
            </span>
            <span
              ref={(el) => (textRefs.current[1] = el)}
              className="text-purple-700 font-semibold text-xs px-3 py-1 rounded-full uppercase"
            >
              AI Photos
            </span>
          </div>

          <h1
            ref={(el) => (textRefs.current[2] = el)}
            className="
              mt-4 sm:mt-6
              text-2xl sm:text-4xl lg:text-5xl
              font-semibold text-gray-700
              leading-tight
            "
          >
            Generate photos <br /> of yourself, <br /> with AI
          </h1>

          <p
            ref={(el) => (textRefs.current[3] = el)}
            className="text-gray-700 mt-4 sm:mt-8 text-xs sm:text-base font-semibold leading-relaxed"
          >
            Get professional-quality photos of yourself with stunning realism,
            powered by AI.
          </p>

          <div
            ref={dropDownRef}
            className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-base"
          >
            Experience the future of photography with AI-generated images.
          </div>

          <Link
            to="/user-login"
            className="
              mt-6 sm:mt-10 inline-flex items-center gap-2
              px-4 sm:px-6 py-2 sm:py-3
              bg-gray-800 hover:bg-gray-700
              text-white font-semibold
              text-xs sm:text-base
              rounded-lg shadow-md
              transition
            "
          >
            Discover AI Photos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pages5;
