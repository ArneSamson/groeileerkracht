import "./style.css";
import React, { Suspense, useState } from "react";
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

  // Nieuwe state om de pop-up te beheren
  const [showInstructions, setShowInstructions] = useState(false);

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
            zIndex: 3, 
            backgroundColor: "var(--neutral-100, #fdfdfc)" 
        }}>
            <h1 style={{ textAlign: "center", padding: "0 20px" }}>Mijn groeileerkracht - Arne Samson</h1>
            <p style={{ fontSize: "18px", color: "var(--neutral-700)" }}>Kies hoe je dit verslag wil bekijken:</p>
            
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
              <button 
                onClick={() => {
                  setViewMode("3d");
                  setShowInstructions(true); // Activeer de pop-up wanneer 3D gekozen wordt
                }}
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

        {/* 1B. INSTRUCTIE POP-UP (Enkel zichtbaar in 3D modus als showInstructions true is) */}
        {viewMode === "3d" && showInstructions && (
          <div style={{
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 9999, // Ligt bovenop alles
            display: "flex", justifyContent: "center", alignItems: "center",
            backdropFilter: "blur(5px)"
          }}>
            <div style={{
               backgroundColor: "#fdfdfc", padding: "40px", borderRadius: "12px",
               maxWidth: "500px", width: "90%", textAlign: "center",
               boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
               color: "#333", fontFamily: "sans-serif"
            }}>
               <h2 style={{ marginTop: 0 }}>Hoe speel je de game? 🕹️</h2>
               <p style={{ fontSize: "16px", lineHeight: "1.6", margin: "20px 0" }}>
                  <strong>Bewegen:</strong> Houd de linkermuisknop (of je vinger op het scherm) ingedrukt in de richting waar je naartoe wil rollen.
                  <br/><br/>
                  <strong>Ontdekken:</strong> Rol met je speler in de oplichtende vakken bij de verschillende objecten om de bijbehorende teksten te lezen.
               </p>
               <button 
                  onClick={() => setShowInstructions(false)}
                  style={{
                     marginTop: "10px", padding: "12px 24px", fontSize: "16px", backgroundColor: "#ff5c00",
                     color: "white", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold", width: "100%"
                  }}
               >
                  Begrepen, let's go!
               </button>
            </div>
          </div>
        )}

        {/* 2. KNOP TERUG NAAR MENU */}
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

        {/* 3. DE 3D CANVAS */}
        <div style={{
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
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
            {/* Optimalisatie: Pauzeer physics in het menu, 2D weergave OF als de instructies open staan */}
            <Physics paused={viewMode !== "3d" || showInstructions}>
              <Experience />
            </Physics>
          </Canvas> 
        </div>

        {/* 4. DE 2D WEERGAVE */}
        <div style={{
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
            display: viewMode === "2d" ? "block" : "none",
            zIndex: 2,
            backgroundColor: "transparent" 
        }}>
            <TwoDimensional />
        </div>

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