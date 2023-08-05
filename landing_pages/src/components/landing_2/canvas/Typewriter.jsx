import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./typewriter/scene.gltf");

  return (
    <primitive object={earth.scene} 
    scale={isMobile ? 1.5 : 1.2} 
    position-y={isMobile ? -5 : -2} 
    position={isMobile ? [12, -3, -2.2] : [11, -3.25, -2]}
    rotation={isMobile ? [-0.01, -2, -0] : [-0.01, -2, -0.08]}
    />
  );
};

const EarthCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 720px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [20, 3, 85], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
          autoRotate={true}
          autoRotateSpeed={5.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}

        <ambientLight intensity={isMobile ? 3 : 1.5} />
        <directionalLight intensity={2.5} position={[0, 12, 50]} />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;