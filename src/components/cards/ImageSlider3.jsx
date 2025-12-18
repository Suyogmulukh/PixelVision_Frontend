import React, { useState, useRef, useEffect } from 'react'

const ImageSlider3 = () => {
  const sliderRefs = useRef([])
  const sliderHandleRefs = useRef([])
  const imageAfterRefs = useRef([])

  const [isActive, setIsActive] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const getOffset = (event, index) => {
    const rect = sliderRefs.current[index].getBoundingClientRect()
    let offsetX = event.touches
      ? event.touches[0].clientX - rect.left
      : event.clientX - rect.left

    return Math.max(0, Math.min(offsetX, rect.width))
  }

  const moveSlider = (offsetX, index) => {
    const sliderWidth = sliderRefs.current[index].offsetWidth
    const percentage = (offsetX / sliderWidth) * 100

    sliderHandleRefs.current[index].style.left = `${percentage}%`
    imageAfterRefs.current[index].style.clipPath = `inset(0 ${sliderWidth - offsetX}px 0 0)`
  }

  const onMove = (e) => {
    if (!isActive || activeIndex === null) return
    moveSlider(getOffset(e, activeIndex), activeIndex)
  }

  useEffect(() => {
    const stop = () => {
      setIsActive(false)
      setActiveIndex(null)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', stop)
    document.addEventListener('touchmove', onMove)
    document.addEventListener('touchend', stop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', stop)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', stop)
    }
  }, [isActive, activeIndex])

  const images = [{ before: '/face-enhancer-2-removebg-preview.png', after: '/face-enhancer-1-removebg-preview.png' }]

  return (
    <div className="relative w-full flex justify-center items-center py-10">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (sliderRefs.current[index] = el)}
          className="
            relative overflow-hidden select-none
            w-[90vw] sm:w-[80vw] md:w-[600px]
            h-[55vh] sm:h-[60vh] md:h-[650px]
            rounded-xl shadow-lg
          "
          onMouseDown={(e) => {
            setIsActive(true)
            setActiveIndex(index)
            onMove(e)
          }}
          onTouchStart={(e) => {
            setIsActive(true)
            setActiveIndex(index)
            onMove(e)
          }}
        >
          {/* BEFORE */}
          <img
            src={image.before}
            alt="Before"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />

          {/* AFTER */}
          <div
            ref={(el) => (imageAfterRefs.current[index] = el)}
            className="absolute inset-0 h-full w-full"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
          >
            <img
              src={image.after}
              alt="After"
              className="h-full w-full object-cover object-bottom"
            />
          </div>

          {/* SLIDER HANDLE */}
          <div
            ref={(el) => (sliderHandleRefs.current[index] = el)}
            className="
              absolute top-0 bottom-0 left-1/2
              w-1 bg-white/80
              cursor-ew-resize
              after:content-['']
              after:absolute after:-left-3 after:top-1/2
              after:h-6 after:w-6 after:-translate-y-1/2
              after:rounded-full after:bg-black
            "
          />

          {/* LABELS */}
          <span className="absolute top-4 left-4 text-xs sm:text-sm bg-black text-white px-3 py-1 rounded-full">
            Before
          </span>
          <span className="absolute top-4 right-4 text-xs sm:text-sm bg-black text-white px-3 py-1 rounded-full">
            After
          </span>
        </div>
      ))}
    </div>
  )
}

export default ImageSlider3
