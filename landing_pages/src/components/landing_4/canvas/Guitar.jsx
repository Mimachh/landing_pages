import React, { Suspense, useEffect, useState } from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../../../store';
const Scene = ({ isMobile }) => {
    const guitar = useGLTF("./guitar/scene.gltf");

    return (
      <primitive object={guitar.scene} scale={isMobile ? 0.8 : 1.2} position-y={isMobile ? -0 : -0.10}
      position-x={isMobile ? -0.45 : -0.5}
      rotation-y={1} rotation-x={0}
      />
    );
}
const Guitar = () => {
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
//   const snap = useSnapshot(state);
  const guitar = useGLTF('./guitar/scene.gltf');

//   const logoTexture = useTexture(snap.logoDecal);
//   const fullTexture = useTexture(snap.fullDecal);

//   useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

//   const stateString = JSON.stringify(snap);

  return (
    <group>
      <mesh
        // castShadow
        // geometry={nodes.T_Shirt_male.geometry}
        // material={materials.lambert1}
        // material-roughness={1}
        // dispose={null}
      >
        <Scene isMobile={isMobile}/>
        {/* {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
            
        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )} */}
      </mesh>
    </group>
  )
}

export default Guitar