import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-about w-screen h-screen flex items-center justify-center">
      <div className=" bg-gray-700 rounded-md  box-border flex  items-center justify-center drop-shadow-xl ">
        <div className="md:w-2/3 container mx-auto px-10 py-20 md:flex-row flex-col items-center justify-center text-center">
          <h1 className="title-font text-xl md:text-3xl md:mb-4 font-medium text-gray-800 text-center">
            Hi, I'm Alexander Steeves.
            <br className="lg:inline-block" />
            I love to learn.
          </h1>
          <div className = "flex items-center justify-center text-center ">
          <p className="mb-8 text-sm md:text-xl leading-relaxed ">
            Welcome to my portfolio! I am an enthusiastic developer with a keen interest in full-stack development. Presently, I am pursuing a Bachelor's degree in Computer Engineering.
          </p>
          </div>
          
          <div className="flex justify-center space-x-5">
            <a
              href="#contact"
              className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-button-100 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
            >
              Let's Work
            </a>
            <a
              href="#projects"
              className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-button-100 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
