import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Page7 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="
        relative w-full
        bg-gray-300
        text-black
        py-8 sm:py-12 lg:py-20
        px-6 sm:px-8
        text-center
        shadow-xl sm:shadow-2xl shadow-gray-700
      "
    >
      <h4 className="text-purple-700 text-[10px] sm:text-xs tracking-[2px] sm:tracking-widest mb-3 sm:mb-4 font-bold uppercase">
        OUR SOLUTIONS
      </h4>

      {/* HEADLINE 1 */}
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        className="
          font-[anzo3] font-thin
          text-3xl sm:text-5xl lg:text-7xl
          leading-tight
        "
      >
        Bye-bye blur <span className="inline-block">👋🏼</span>
      </motion.h1>

      {/* HEADLINE 2 */}
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1, delay: 0.2 }}
        className="
          relative
          mt-1 sm:mt-2
          font-[anzo3] font-thin
          text-3xl sm:text-5xl lg:text-7xl
          leading-tight
        "
      >
        Hello{" "}
        <span className="text-blue-700 font-[anzo2] relative">
          High
          {/* UNDERLINE */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="
              absolute left-0 -bottom-0.5 sm:-bottom-1
              w-full h-0.5 sm:h-1
              bg-pink-500
              origin-left
            "
          />
        </span>{" "}
        definition
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="
          text-gray-600
          text-sm sm:text-base lg:text-xl
          mt-6 sm:mt-8
          max-w-md sm:max-w-xl lg:max-w-2xl
          mx-auto
          leading-relaxed
          px-2 sm:px-0
        "
      >
        Details, colors, and clarity are instantly enhanced in your photos and
        videos. Your content becomes sharper, more vibrant, and more dazzlingly
        defined than you could even imagine.
      </motion.p>
    </section>
  );
};

export default Page7;