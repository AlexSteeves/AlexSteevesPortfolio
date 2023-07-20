import { BsLinkedin, BsGithub } from "react-icons/bs";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Alexander Steeves
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center ">
          <a href="#projects" className="mr-5 nav-text">
            Projects
          </a>
          <a href="#skills" className="mr-5 nav-text">
            Skills
          </a>
          <a href="#contact" className="mr-5 nav-text">
            Contact Me
          </a>
        </nav>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-8 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/AlexSteeves" className="mr-5">
            <SideBarIcon icon={<BsGithub size="28" />} />
          </a>

          <a href="https://www.linkedin.com/feed/" className="mr-5 ">
            <SideBarIcon icon={<BsLinkedin size="28" />} />
          </a>

          <a
            href="./AlexanderSteevesResume.pdf"
            className="mr-5 nav-text"
          >
            <h>Resume</h>
          </a>
        </nav>
      </div>
    </header>
  );
}

const SideBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

