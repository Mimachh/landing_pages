import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../Loader";

const PS1 = ({ isMobile }) => {
  const ps1 = useGLTF("./ps1/scene.gltf");

  return (
    <primitive object={ps1.scene} scale={isMobile ? 1.8 : 0.9} position-y={isMobile ? -0.5 : 1.5} rotation-y={0.0} rotation-x={0.55} rotation-z={0.45}
    />
  );
};

const PS1Canvas = () => {

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
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        //   autoRotate={true}
        //   autoRotateSpeed={5.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.5} position={[0.4, 2.5, -1.5]} />
        <PS1 isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default PS1Canvas;