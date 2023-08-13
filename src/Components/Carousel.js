import React, { useState, useEffect, useRef } from "react";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import { projects } from "../data";

export default function Carousel() {
  const slides = [
    {
      src: projects[0].image,
    },
    {
      src: projects[1].image,
    },
    {
      src: projects[2].image,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
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

  return (
    <section className="w-fit mx-auto rounded-xl border-gray-900 ">
      <div className="w-50% h-fit group">
        <div className="relative overflow-hidden">
          <img
            src={projects[currentIndex].image}
            alt="gallery"
            className="h-96 w-full object-cover"
          />
          <a href={projects[currentIndex].link}>
            <div className="absolute h-full w-full bg-gray-900 flex flex-col items-center justify-center group-hover:bottom-0 group-hover:opacity-95 opacity-0 transition-all duration-500 text-center">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {projects[currentIndex].subtitle}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {projects[currentIndex].title}
              </h1>
              <p className="leading-relaxed">
                {projects[currentIndex].description}
              </p>
            </div>
          </a>

          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={previousSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
    </section>
  );
}


