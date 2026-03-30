import "./style.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Loader } from "./helper/useLoader";

import { Leva } from "leva";

import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));


const camSettings = {
  fov: 55,
  zoom: 1,
  near: 0.1,
  far: 200,
  position: [0, 2, 4],
};

function App() {
  return (
    <>
      <div className='root-container'>
        <Canvas
          className='canvas'
          camera={camSettings}
          gl={{
            antialias: true,
            outputColorSpace: THREE.SRGBColorSpace,
            toneMappingExposure: 1,
            alpha: true,
          }}
          shadows={true}
          dpr={window.devicePixelRatio}
        >

          <Experience />
        </Canvas>

        {/* <ConfigUi /> */}

        <Leva
        // collapsed
        //   hidden
        />
      </div>
    </>
  );
}

root.render(<App />);