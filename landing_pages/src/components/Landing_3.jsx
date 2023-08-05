import React from "react";
import Canvas from './landing_3/canvas'
import Customizer from './landing_3/Customizer'
import Home from './landing_3/Home'

const Landing_3 = () => {
  return (
    <main className="app transition-all ease-in bg-white-100 text-primary">
        <Home />
        <Canvas />
        <Customizer />
    </main>
  );
};

export default Landing_3;