import React from "react";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 snap-y snap-mandatory overscroll-y-none overflow-scroll h-screen w-screen  ">

      
      

      <div className = "fixed h-1/5 w-screen z-10">
        <Navbar className = ""/>

      </div>

      <div className="h-screen w-screen snap-start snap-always z-1">
        <About className="" />
      </div>

      <div className="h-screen w-screen snap-start snap-always z-1">
        <Projects />
      </div>

      <div className="h-screen w-screen snap-start snap-always ">
        <Skills />
      </div>

      <div className="h-screen w-screen snap-start snap-always ">
        <Contact />
      </div>
    </main>
  );
}
