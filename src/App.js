import React from "react";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";






export default function App() {
  return (
    <main className = "text-gray-400 bg-gray-900 body-font snap-y snap-mandatory overflow-y-scroll h-screen w-screen scroll-snap-stop:always ">
      
      
      <Navbar />

      <div className ="h-screen w-screen snap-start scroll-snap-stop:always ">
      <About className = ""/>
      </div>

      <div className ="h-screen w-screen snap-start scroll-snap-stop:always ">
      <Projects />
      </div>

      <div className ="h-screen w-screen snap-start scroll-snap-stop:always ">
      <Skills />
      </div>

      <div className ="h-screen w-screen snap-start scroll-snap-stop:always ">
      <Contact />
      </div>
      
      
      
    </main>
  );
}

 