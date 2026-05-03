import React, { useState, useRef, useEffect } from "react";

import { CameraControls, OrbitControls } from "@react-three/drei";

import { EffectComposer, Bloom } from '@react-three/postprocessing'

import Scene from "./components/Scene.jsx";
import Lights from "./components/lighting/Lights.jsx";

import { useThreeGlobal } from "./helper/useThreeGlobal.tsx";
import { Perf } from "r3f-perf";

export default function Experience() {

    const { ThreeGlobal } = useThreeGlobal();

return (
    <>
        <Perf position='top-left' style={{ transform: "translateX(0vw)" }} />

        {/* <CameraControls makeDefault /> */}

        {/* <OrbitControls makeDefault /> */}

        <EffectComposer>
            <Bloom 
                luminanceThreshold={1} // Zorgt dat enkel objecten met emissiveIntensity > 1 een gloed krijgen
                mipmapBlur={true}      // Maakt de gloed veel zachter en realistischer
                intensity={1.5}        // Sterkte van het halo-effect
            />
        </EffectComposer>

        <Lights />

        <Scene/>

        <ThreeGlobal />
    </>
  );
}