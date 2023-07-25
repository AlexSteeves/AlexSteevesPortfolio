import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className = "h-screen w-screen items-center justify-center flex">
      <div className="container px-5 py-10 mx-auto items-center justify-center">
        <div className="text-center mb-5">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills & Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full tx-lg ">
              <div className="bg-gray-700 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white mr-2 ">
                  {" "}
                  {skill.symbol}
                </span>

                <span className="title-font font-medium text-white ">
                  {skill.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>

*/
