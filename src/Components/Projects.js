import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

import Carousel from './Carousel';

export default function Projects() {
  return (
    <section id="projects" className="text-slate-200 flex flex-col bg-slate-800 body-font w-screen h-screen items-center justify-center">
      <div className="container px-5 md:py-5 mx-auto text-center lg:px-40 items-center justify-center">
        <div className="flex flex-col w-full">
          <CodeIcon className="mx-auto inline-block w-10" />
          <h1 className=" text-3xl font-thin font-serif text-slate-200">
            Personal Projects
          </h1>
        </div>

      </div>
    

        <Carousel />
      
      

    </section>
  );
}


/*
 <div className="flex flex-wrap -m-4 " style = {{height:"300px"}}>
          {projects.map((project) => (
            <div key={project.image} className="sm:w-1/3 w-full p-4"
            style = {{height:"300px"}} >
              <a href={project.link} className = "h-full block">
                <div className="flex relative ">
                  <img
                    alt="gallery"
                    className="absolute inset-0 object-cover object-center h-full w-full"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative  w-full border-4 border-gray-600 bg-gray-100 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
*/