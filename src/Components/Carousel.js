import React, { useState, useEffect, useRef} from "react";
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


  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    // Get the height of the image after it has loaded
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [currentIndex]);

  return (
    <div className="h-2/3 w-full md:h-1/2 md:w-1/2 m-auto  my-0 px-4 relative group rounded-xl border-gray-900 border-1">
   
      <div
        style={{
          
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full rounded-xl transition-all duration-500"
      >
        <a href={projects[currentIndex].link}>
          <img
            ref ={imageRef}
            src={projects[currentIndex].image}
            alt="gallery"
            className="absolute inset-0 object-contain object-center w-full  transition-all rounded-xl drop-shadow-sm border-b-gray-900 border-r-1"
          />

          <div style = {{height: imageHeight}} className="absolute inset-0 hover:bg-gray-700 opacity-0 hover:opacity-100 border-gray-900 border-5 transition-opacity object-contain duration-500 bg-gray-900 ease-in rounded-xl h-fit">


            <div className="px-8 md:py-10 flex flex-col items-center justify-center text-center text-black h-full">
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
            {/* Left Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={previousSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer opacity-80">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
          </div>
        </a>
      
      </div>

      
    </div>
  );
}

/*

backgroundImage: `url(${slides[currentIndex].src})`,
*/
