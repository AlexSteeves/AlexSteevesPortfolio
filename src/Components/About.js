import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 h-screen flex items-center justify-center"
    >
      <div className="w-5/6 container mx-auto px-10 py-20 md:flex-row flex-col items-center justify-center text-center">
        <h1 className="title-font text-xl md:text-3xl md:mb-4 font-medium text-slate-200 text-center">
          Hi, I'm Alexander Steeves
          <br className="lg:inline-block" />I have a passion for learning.
        </h1>
        <div className="flex items-center justify-center text-center ">
          <p className="mb-8 text-sm md:text-xl leading-relaxed ">
            Welcome to my portfolio! I am an enthusiastic developer with a keen
            interest in full-stack development. Presently, I am pursuing a
            Bachelor's degree in Computer Engineering.
          </p>
        </div>

        <div className="flex justify-center space-x-5">
          <a
            href="#projects"
            className="inline-flex text-slate-200 border-0 py-2 px-6 focus:outline-none rounded text-lg bg-slate-500 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-slate-500 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
          >
            Skills
          </a>
        </div>
      </div>
    </section>
  );
}
