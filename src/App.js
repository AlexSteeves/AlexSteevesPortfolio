import React from "react";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 overscroll-y-none overflow-scroll h-screen w-screen  ">

      <section className = "fixed h-1/8 w-screen z-10">
        <Navbar className = ""/>

      </section>

      <section className="h-screen w-screen  z-1">
        <About />
      </section>

      <section className="h-screen w-screen  z-1">
        <Projects />
      </section>

      <section className="h-screen w-screen">
        <Skills />
       
      </section>


      <section className="h-1/8 w-screen ">
        <Footer />
      </section>

      
    </main>
  );
}

/*
<div className="h-screen w-screen snap-start snap-always ">
        <Contact />
      </div>

*/
