import React from "react";

export default function About() {
  return (
    <section id="about" className ="bg-gray-900">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hi, I'm Alexander Steeves.
            <br className="hidden lg:inline-block" />I love to learn.
          </h1>
          <p className="mb-8 leading-relaxed">
          Welcome to my portfolio! I am an enthusiastic developer with a keen interest in full-stack development. Presently, I am pursuing a Bachelor's degree in Computer Engineering.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg bg-button-100 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
              
            >


              Let's Work
            </a>
            <a
              href="#projects"
              className="ml-5 inline-flex text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg bg-button-100 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>

*/
