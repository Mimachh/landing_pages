import React from "react";
import Hero2 from "./landing_2/Hero2";
import About2 from "./landing_2/About2";
import Contact2  from "./landing_2/Contact2";

const Landing_2 = () => {
  return (
    <div className="bg-black-200 min-h-screen font-vt">
      <Hero2 />
      <div className="bg-white-100">
      <About2 />
      </div>
      <div className="relative z-0">
        <Contact2 />
        {/* <StarsCanvas /> */}
        </div>
    </div>
  );
};

export default Landing_2;