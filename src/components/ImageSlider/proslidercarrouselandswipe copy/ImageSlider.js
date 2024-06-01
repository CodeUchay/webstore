import React, { useState, useEffect, useRef, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import media from "../images/media.jpg";
import media1 from "../images/media1.jpg";
import media2 from "../images/media2.jpg";
import media3 from "../images/media3.jpg";

const ImageSlider = () => {
  const slides = [
    {
      url: media,
      title: "media",
    },
    {
      url: media1,
      title: "media1",
    },
    {
      url: media2,
      title: "media2",
    },
    {
      url: media3,
      title: "media3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const startXRef = useRef(0);
  const endXRef = useRef(0);
  const lastScrollTimeRef = useRef(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startXRef.current - endXRef.current > 50) {
      // Swiped left
      nextSlide();
    } else if (endXRef.current - startXRef.current > 50) {
      // Swiped right
      prevSlide();
    }
  };

  const handleWheel = useCallback((e) => {
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 1000) {
      return;
    }
    lastScrollTimeRef.current = now;

    if (e.deltaY < 0) {
      prevSlide(); // Scrolling up
    } else {
      nextSlide(); // Scrolling down
    }
  }, [currentIndex]);

  return (
    <div className="bg-gray-900">
      <h1 className="text-3xl text-gray-100 flex font-bold p-5 justify-center items-center">
        Our Media
      </h1>

      <div
        className="max-w-[800px] h-[580px] text-white bg-gray-900 w-full m-auto py-16 px-4 relative group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <img
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          src={slides[currentIndex].url}
          alt={slides[currentIndex].title}
        />
        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              className="text-2xl cursor-pointer"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled
                style={{
                  color: slideIndex === currentIndex ? 'white' : 'gray',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
