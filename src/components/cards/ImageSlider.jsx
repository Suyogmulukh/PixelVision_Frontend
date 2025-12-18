import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ImageSlider = () => {
  const sliderRefs = useRef([]);
  const sliderHandleRefs = useRef([]);
  const imageAfterRefs = useRef([]);

  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const images = [
    { before: "/old-2.jpg", after: "/old-1.jpg" },
    { before: "/Blur-unblur-1.jpg", after: "/Blur-unblur-2.jpg" },
    { before: "/D-1.jpg", after: "/d-2.jpg" },
  ];

  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-10 sm:py-20 lg:-mt-[570px] -mt-[1065px]">
      <div
        className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-[133px] sm:gap-14 md:gap-40 
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
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
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
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
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
            <p className="absolute bottom-3 left-3 text-xs bg-black text-white px-3 py-1 rounded-full">
              Before
            </p>
            <p className="absolute bottom-3 right-3 text-xs bg-black text-white px-3 py-1 rounded-full">
              After
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
