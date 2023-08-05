import React from "react";
import { About, Contact, Hero, StarsCanvas, Techno, Works } from "./components";

const Landing_1 = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-0">
        <Hero />
        </div>
        <About />
        <Techno />
        <Works />
        <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>
    </div>
  );
};

export default Landing_1;