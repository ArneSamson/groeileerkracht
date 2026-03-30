import React, { useState, useRef, useEffect } from "react";

import { CameraControls, OrbitControls } from "@react-three/drei";

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

        <OrbitControls makeDefault />

        <Lights />

        <Scene/>

        <ThreeGlobal />
    </>
  );
}