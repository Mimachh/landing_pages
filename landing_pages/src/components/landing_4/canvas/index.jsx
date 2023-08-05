import { Canvas } from "@react-three/fiber"
import { Environment, Center } from "@react-three/drei"

import Guitar from './Guitar'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'

const CanvasModel = () => {
  return (
      <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 45}}
      gl={{ preserveDrawingBuffer: true}}
      className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight 
        intensity={0.25}
        />
        <directionalLight intensity={12} position={[-0.02, -1.2,  -0.02]} />

        <Environment preset="city" />

        <CameraRig>
          <Backdrop />
          <Center>
            <Guitar />
          </Center>
        </CameraRig>
      </Canvas>
  )
}

export default CanvasModel