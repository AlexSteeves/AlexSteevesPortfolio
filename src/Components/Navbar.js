import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useState } from "react";
import React from "react";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const list = [
  {
    id: "1",
    color: "White",
  },

  {
    id: "2",
    color: "#173acb",
  },

  {
    id: "3",
    color: "#BFFF00",
  },
];

const getColorById = (idToSearch) => {
  const item = list.find((item) => item.id === idToSearch);
  return item ? item.color : null; 
};

const Navbar = () => {
 
  /*const color = getColorById(props.divId); */

  return (
    <>
    <div className = "absolute inset-y-0 left-0 ">
        <a href = "#about">
        <h1 className = "text-3xl shadow-drop-xl mt-8 ml-12 text-bold text-white hover:text-gray-100 transition-all duration-500"
        >

            Alex Steeves
        </h1>
        </a>
        
    </div>
    <div className="absolute inset-y-0 right-0">
      <Menu as="div" className='relative inline-block text-left'>
        <div className={"mt-5 mr-5"}>
          <Menu.Button
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-semibold text-gray-900 "
      
          
          >
            <FaChevronDown
              className=" h-5 w-5 text-gray-400 hover:text-gray-100 transition-all duration-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 z-10 mt-1 mr-5 w-56 origin-top-right divide-y divide-gray-500 rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none bg-white"
            
          >
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#projects"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Projects
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#skills"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Skills
                  </a>
                )}
              </Menu.Item>

              
             
              
            </div>
            <div className="py-1">

            <Menu.Item>
                {({ active }) => (
                    
                  <a
                    href="./AlexSteevesResume.pdf"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Resume
                    
                   
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                    
                  <a
                    href="https://github.com/AlexSteeves?tab=repositories"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <BsGithub size="28" />
                    
                   
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://www.linkedin.com/in/alexander-steeves-8122b8178/"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                   <BsLinkedin size="28" />
                    
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>
    
  );
};

export default Navbar;


/*

 <Menu.Item>
                {({ active }) => (
                  <a
                    href="#contact"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Contact
                  </a>
                )}
              </Menu.Item>


*/