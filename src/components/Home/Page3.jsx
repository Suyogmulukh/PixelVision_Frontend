import React from "react";

const Page3 = () => {
  return (
    <div className="
      relative
      w-full
      bg-cyan-50
      flex items-center justify-center
      py-20 sm:py-28 lg:py-32
      overflow-hidden
    ">
      {/* Laptop Frame */}
      <img
        src="/Homelaptop.avif"
        alt="Laptop frame"
        className="
          absolute
          z-40
          w-[90%] sm:w-[80%] lg:w-[70%]
          max-w-5xl
          pointer-events-none
        "
      />

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          relative z-10
          w-[72%] sm:w-[75%] lg:w-[52%] lg:mb-20 mb-4
          aspect-video
          object-cover
          rounded-lg
        "
        src={'/PixelVisionVideo.mp4'}
      />

      {/* Decorative Lines */}
      <div className="absolute top-[45%] w-[70%] h-0.5 bg-gray-400 z-0 hidden sm:block" />
      <div className="absolute top-[62%] w-[85%] h-0.5 bg-gray-400 z-0 hidden sm:block" />
      <div className="absolute top-[80%] w-full h-0.5 bg-gray-400 z-0 hidden lg:block" />
    </div>
  );
};

export default Page3;
