import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import { Island } from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;


  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState();
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  useEffect(() => {
    if (isPlayingAudio) {
      audioRef.current.play();
    }
    return () => audioRef.current.pause();
  }, [isPlayingAudio])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let rotation = [0.1, 4.7, 0]
    let screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5]
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition]
  }

  const [landScreenScale, landScreenPosition, isLandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize()


  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {(currentStage && currentStage > 0) && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          {/* <pointLight />
          <spotLight  /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />

          <Island
            scale={landScreenScale}
            position={landScreenPosition}
            rotation={isLandRotation}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
            setIsRotating={setIsRotating}
          />

          <Sky
            isRotating={isRotating}
          />

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />

        </Suspense>

      </Canvas>

      <div className="absolute bottom-2 right-2">
        <img
          src={isPlayingAudio ? soundoff : soundon}
          alt="sound"
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className="w-10 h-10 object-contain cursor-pointer" />
      </div>
    </section>
  )
}

export default Home