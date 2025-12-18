import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import ImageSlider from "../cards/ImageSlider";

const features = [
  {
    title: "Unblur & Sharpener",
    desc: "Remove any motion blur, camera shake, or focus issues, and make your images and videos look sharp and clear.",
    delay: 1,
  },
  {
    title: "Old Photos Restorer",
    desc: "Bring your blurred, faded, and damaged photos back to life, making them clearer and more vibrant than ever before.",
    delay: 1.2,
  },
  {
    title: "Denoiser",
    desc: "Clean up every pixel in your photo, eliminating grain and noise to get a clear and sharp image that captures every detail.",
    delay: 1.3,
  },
];

const Page4 = () => {
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("page4");
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
      id="page4"
      className="relative w-full bg-gray-300 text-white py-12 sm:py-24 px-3 sm:px-8 lg:px-16"
    >
      {/* FEATURE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-20">
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
            transition={{ duration: 1, delay: item.delay }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            drag
            dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
          >
            <h2 className="text-base sm:text-2xl font-medium mb-2 sm:mb-3">
              {item.title}
            </h2>
            <p className="text-xs sm:text-base text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* IMAGE SLIDER */}
      <div className="flex justify-center">
        <ImageSlider />
      </div>
    </section>
  );
};

export default Page4;
