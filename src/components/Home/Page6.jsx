import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImageSlider2 from "../cards/ImageSlider2";

const features = [
  {
    title: "Face Enhancer",
    desc: "Elevate your portraits with enhanced facial detail, creating a natural look that captures the essence of your subjects.",
    delay: 0.9,
  },
  {
    title: "Color Fixer",
    desc: "Bring out the full spectrum of colors in your photos, enhancing the tones and creating natural and vivid images.",
    delay: 1.1,
  },
  {
    title: "Image Enlarger",
    desc: "Upscale your photos and videos up to 2x without sacrificing quality, and make every pixel count.",
    delay: 1.3,
  },
];

const Page6 = () => {
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("page6");
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.75) {
        setHasViewed(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="page6"
      className="relative w-full bg-gray-300 text-white py-8 sm:py-12 lg:py-10 px-4 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 ">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="
              relative bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 sm:border-4 border-gray-700
              p-4 sm:p-6 flex flex-col justify-end
              min-h-[320px] sm:min-h-[280px] lg:min-h-[420px]
              hover:bg-gray-800
            "
            initial={{ opacity: 0, y: 40 }}
            animate={hasViewed ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: item.delay }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            drag
            dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-3">
              {item.title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* IMAGE SLIDER */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={hasViewed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <ImageSlider2 />
      </motion.div>
    </section>
  );
};

export default Page6;