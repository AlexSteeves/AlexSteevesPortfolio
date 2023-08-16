import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import the required components

import { Navigate} from "react-router-dom";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("1"); // Initialize with the default active section ID
  const curID = 1;
  const handleScroll = (id) => {
    curID = id;
  };

  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 snap-y snap-mandatory overscroll-y-none overflow-scroll h-screen w-screen">
        <section className="fixed h-1/8 w-screen z-10">
          <Navbar curID={activeSection} />
        </section>

        <section id="1" className="h-screen w-screen snap-start snap-always z-1">
          <About onScroll={handleScroll(1)} />
        </section>

        <section id="2" className="h-screen w-screen snap-start snap-always z-1">
          <Projects onScroll={handleScroll(2)} />
        </section>

        <section id="3" className="h-screen w-screen snap-start snap-always">
          <Skills onScroll={handleScroll(3)} />
        </section>

        <section className="h-1/8 w-screen snap-end snap-always">
          <Footer />
        </section>
      </main>
    </Router>
  );
}
