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

        {/* 1. HET KEUZEMENU (LANDING PAGE) */}
        <div style={{
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
            display: viewMode === "menu" ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            zIndex: 3, // Ligt onder de Loader (zIndex 4), maar boven de 2D en 3D weergave
            backgroundColor: "var(--neutral-100, #fdfdfc)" 
        }}>
            <h1 style={{ textAlign: "center", padding: "0 20px" }}>Mijn groeileerkracht - Arne Samson</h1>
            <p style={{ fontSize: "18px", color: "var(--neutral-700)" }}>Kies hoe je dit verslag wil bekijken:</p>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <button 
                onClick={() => setViewMode("3d")}
                style={{
                  padding: "15px 30px", fontSize: "18px", backgroundColor: "var(--primary-500, #ff5c00)", 
                  color: "white", borderRadius: "30px", border: "none", cursor: "pointer", fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(255, 92, 0, 0.3)", transition: "transform 0.2s"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                🎮 Start 3D spelervaring
              </button>
              
              <button 
                onClick={() => setViewMode("2d")}
                style={{
                  padding: "15px 30px", fontSize: "18px", backgroundColor: "var(--neutral-1000, #000)", 
                  color: "white", borderRadius: "30px", border: "none", cursor: "pointer", fontWeight: "bold",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", transition: "transform 0.2s"
                }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              >
                📄 Lees 2D tekstversie
              </button>
            </div>
        </div>

        {/* 2. KNOP TERUG NAAR MENU (Verberg in menu of als de tijdlijn open is) */}
        {!isTimelineOpen && viewMode !== "menu" && (
          <button
            onClick={() => setViewMode("menu")}
            style={{
              position: "absolute",
              zIndex: 999,
              top: 20,
              right: 20,
              padding: "10px 20px",
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "var(--neutral-1000, #000)",
              border: "2px solid var(--neutral-1000, #000)",
              borderRadius: "30px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = "var(--neutral-1000, #000)"; e.target.style.color = "white"; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "var(--neutral-1000, #000)"; }}
          >
            Terug naar menu
          </button>
        )}

        {/* 3. DE 3D CANVAS (Blijft op de achtergrond geladen) */}
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
            {/* Pauzeer physics als we in het menu of de 2D weergave zitten! */}
            <Physics paused={viewMode !== "3d"}>
              <Experience />
            </Physics>
          </Canvas> 
        </div>

        {/* 4. DE 2D WEERGAVE */}
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: viewMode === "2d" ? "block" : "none",
            zIndex: 2,
            backgroundColor: "transparent" 
        }}>
            <TwoDimensional />
        </div>

        <Leva />

        {/* LOADER - Ligt met zIndex 4 overal bovenop totdat de modellen geladen zijn */}
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