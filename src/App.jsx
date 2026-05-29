import "./style.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Physics } from "@react-three/rapier"

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Loader } from "./helper/useLoader";
import UI from "./components/UI/UI.jsx";
import OverlayKwaliteiten from "./components/UI/OverlayKwaliteiten.jsx";
import Timeline from "./components/2D/Timeline.jsx";
import TwoDimensional from "./components/2D/TwoDimensional.jsx";

import useScene from "./store/useScene.jsx";

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
  const containerStyles = { zIndex: 4, backgroundColor: "#fafafa" };
  const barStyles = { backgroundColor: "#000000" };
  const dataStyles = { color: "#272727", fontSize: "16px", lineHeight: "30px", fontWeight: 400 };
  const innerStyles = { width: "200px", display: "flex", justifyContent: "center", flexDirection: "column", gap: "20px" };

  const setViewMode = useScene((state) => state.setViewMode);
  const viewMode = useScene((state) => state.viewMode);
  const isTimelineOpen = useScene((state) => state.isTimelineOpen);

  return (
    <>
      <div className='root-container'>
        
        {!isTimelineOpen && (
          <button
            onClick={() => setViewMode(viewMode === "3d" ? "2d" : "3d")}
            style={{
              position: "absolute",
              zIndex: 999,
              top: 20,
              right: 20,
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              width: "200px",
              height: "38px",
            }}
          >
            {viewMode === "3d" ? "Bekijk tekst versie" : "Bekijk game versie"}
          </button>
        )}


        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            visibility: viewMode === "3d" ? "visible" : "hidden",
            pointerEvents: viewMode === "3d" ? "auto" : "none", 
            zIndex: 1
        }}>
          <UI />
          <OverlayKwaliteiten />
          <Timeline />
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
            <Physics paused={viewMode === "2d"}>
              <Experience />
            </Physics>
          </Canvas> 
        </div>

        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: viewMode === "2d" ? "block" : "none",
            zIndex: 2,
            backgroundColor: "#fafafa" // Zorg dat dit de achtergrond bedekt
        }}>
            <TwoDimensional />
        </div>

        <Leva />

        <Loader
          containerStyles={containerStyles}
          barStyles={barStyles}
          dataStyles={dataStyles}
          innerStyles={innerStyles}
          dataInterpolation={(p) => `Loading scene: ${p.toFixed(2)}%`}
        />

      </div>
    </>
  );
}

root.render(<App />);