import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ImageSlider2 = () => {
  const sliderRefs = useRef([]);
  const sliderHandleRefs = useRef([]);
  const imageAfterRefs = useRef([]);

  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { before: "/face-enhancer-1.jpg", after: "/face-enhancer-2.jpg" },
    { before: "/color-2.jpg", after: "/color-1.jpg" },
    { before: "/image-enhaces-2.jpg", after: "/image-enhaces-2.jpg" },
  ];

  const getOffset = (event, index) => {
    const rect = sliderRefs.current[index].getBoundingClientRect();
    let offsetX = event.touches
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left;

    return Math.max(0, Math.min(offsetX, rect.width));
  };

  const moveSlider = (offsetX, index) => {
    const slider = sliderRefs.current[index];
    const percentage = (offsetX / slider.offsetWidth) * 100;

    sliderHandleRefs.current[index].style.left = `${percentage}%`;
    imageAfterRefs.current[index].style.clipPath = `inset(0 ${
      slider.offsetWidth - offsetX
    }px 0 0)`;
  };

  const onMove = (e) => {
    if (!isActive || activeIndex === null) return;
    moveSlider(getOffset(e, activeIndex), activeIndex);
  };

  useEffect(() => {
    const stop = () => {
      setIsActive(false);
      setActiveIndex(null);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", stop);
    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", stop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", stop);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", stop);
    };
  }, [isActive, activeIndex]);

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-10 sm:py-20 lg:-mt-[490px] -mt-[1015px] ">
      <div
        className="
         grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-[135px] sm:gap-14 md:gap-40 
        place-items-center
      "
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (sliderRefs.current[index] = el)}
            className="
              relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg select-none
              w-full max-w-[400px] sm:w-[340px] lg:w-[400px]
              h-[200px] sm:h-[240px] lg:h-[260px]  
            "
            onMouseDown={(e) => {
              setIsActive(true);
              setActiveIndex(index);
              onMove(e);
            }}
            onTouchStart={(e) => {
              setIsActive(true);
              setActiveIndex(index);
              onMove(e);
            }}
          >
            {/* BEFORE */}
            <img
              src={image.before}
              alt="Before"
              className="absolute inset-0 w-full h-full object-cover select-none "
              onError={(e) => {
                e.target.src = "/placeholder.jpg";
              }}
            />

            {/* AFTER */}
            <div
              ref={(el) => (imageAfterRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              <img
                src={image.after}
                alt="After"
                className=" w-full h-full object-cover select-none"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>

            {/* HANDLE */}
            <motion.div
              ref={(el) => (sliderHandleRefs.current[index] = el)}
              drag="x"
              dragConstraints={sliderRefs.current[index]}
              onDrag={(e, info) =>
                moveSlider(
                  info.point.x -
                    sliderRefs.current[index].getBoundingClientRect().left,
                  index
                )
              }
              className="
                absolute top-0 bottom-0 left-1/2
                w-0.5 sm:w-1 bg-white/80 cursor-ew-resize
                after:absolute after:top-1/2 after:left-1/2
                after:-translate-x-1/2 after:-translate-y-1/2
                after:w-5 after:h-5 sm:after:w-6 sm:after:h-6 after:rounded-full after:bg-black select-none
              "
            />

            {/* LABELS */}
            <p className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-[10px] sm:text-xs bg-black text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              Before
            </p>
            <p className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 text-[10px] sm:text-xs bg-black text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
              After
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider2;
