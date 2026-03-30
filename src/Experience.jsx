import React, { useState, useRef, useEffect } from "react";

import CameraHandler from "./helper/CameraHandler.jsx";

import Scene from "./components/Scene.jsx";
import Lights from "./components/lighting/Lights.jsx";

import { useThreeGlobal } from "./helper/useThreeGlobal.tsx";
import { Perf } from "r3f-perf";

export default function Experience() {

    const { ThreeGlobal } = useThreeGlobal();

    const sceneRef = useRef();

return (
    <>
        <Perf position='top-left' style={{ transform: "translateX(0vw)" }} />

        {/* <CameraHandler /> */}

        <Lights />

        <Scene sceneRef={sceneRef} />

        <ThreeGlobal />
    </>
  );
}