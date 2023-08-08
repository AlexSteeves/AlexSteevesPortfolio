import { BsLinkedin, BsGithub } from "react-icons/bs";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-1000 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap py-3 md:p-5 flex-col md:flex-row items-center">
        <a
          href="#about"
          className="ml-3 text-lg md:text-xl text-center title-font font-medium text-gray-800 mb-1 md:mb-0 nav-text drop shadow-lg"
        >
          Alexander Steeves
        </a>
        
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap md:items-center text-base md:justify-center ">
            <a href="#projects" className="mr-3 md:mr-5 nav-text">
              Projects
            </a>
            <a href="#skills" className="mr-3 md:mr-72 nav-text">
              Skills
            </a>
            

            <a href="./AlexSteevesResume.pdf" className="mr-3 md:mr-5 nav-text">
              <h>Resume</h>
            </a>

            
            <a href="https://github.com/AlexSteeves" className=" mr-3 md:mr-5">
              <SideBarIcon icon={<BsGithub size="28" />} />
            </a>

            <a
              href="www.linkedin.com/in/alexander-steeves-8122b8178"
              className="mr-3 md:mr-5 "
            >
              <SideBarIcon icon={<BsLinkedin size="28" />} />
            </a>

            
          </nav>

          
      </div>
    </header>
  );
}

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;


/*
<a href="#contact" className="mr-3 md:mr-72 nav-text">
              Contact Me
            </a>

            
<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-8 md:border-l md:border-gray-800	flex flex-wrap items-center text-base justify-center ">
            <a href="https://github.com/AlexSteeves" className="mr-5">
              <SideBarIcon icon={<BsGithub size="28" />} />
            </a>

            <a
              href="www.linkedin.com/in/alexander-steeves-8122b8178"
              className="mr-5 "
            >
              <SideBarIcon icon={<BsLinkedin size="28" />} />
            </a>

            <a href="./AlexSteevesResume.pdf" className="mr-5 nav-text">
              <h>Resume</h>
            </a>
          </nav>
        
*/