import React from "react";
import useStore from "../../store/useScene";
import { useShallow } from 'zustand/shallow'


export default function OverlayKwaliteiten() {
    const isOpen = useStore((state) => state.isOverlayOpen);
    const setIsOverlayOpen = useStore((state) => state.setIsOverlayOpen);
    const data = useStore((state) => state.overlayData); // Haal de data op uit de store
    const enteredKwaliteitenPlain = useStore(useShallow((state) => state.enteredKwaliteitenPlain));
    const enteredUitdagingenPlain = useStore(useShallow((state) => state.enteredUitdagingenPlain));

    // Als hij niet open is OF er is geen data, render niets
    if (!isOpen || !data) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 9999, display: "flex", justifyContent: "center",
            alignItems: "center", backdropFilter: "blur(5px)" 
        }}>
            <div style={{
                backgroundColor: "#fdfdfc", padding: "40px", borderRadius: "30px",
                maxWidth: "700px", width: "90%", boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                fontFamily: "var(--body-family, sans-serif)", color: "#333",
                maxHeight: "85vh", overflowY: "auto", position: "relative"
            }}>
                {/* Dynamische Inhoud */}
                <h2 style={{ marginTop: 0, marginBottom: "10px", color: "var(--neutral-1000)" }}>
                    {data.titel}
                </h2>
                
                <span style={{ 
                    display: "inline-block", padding: "6px 12px", borderRadius: "20px", 
                    fontSize: "12px", fontWeight: "bold", 
                    backgroundColor: enteredKwaliteitenPlain ? "#e8f5e9" : enteredUitdagingenPlain ? "#ffebee" : "#eee",
                    color: enteredKwaliteitenPlain ? "#2e7d32" : enteredUitdagingenPlain ? "#c62828" : "#333",
                    marginBottom: "25px" 
                }}>
                    DLR: {data.dlr}
                </span>

                <h4 style={{ marginBottom: "10px" }}>In de klas:</h4>
                <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>{data.praktijk}</p>

                <h4 style={{ marginBottom: "10px" }}>De link met het beleid:</h4>
                <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>{data.beleidLink}</p>

                <div style={{ 
                    backgroundColor: "rgba(255, 92, 0, 0.05)", borderLeft: "4px solid #ff5c00", 
                    padding: "20px", marginTop: "30px", borderRadius: "0 10px 10px 0" 
                }}>
                    <h4 style={{ marginBottom: "10px" }}>Mijn visie & actie:</h4>
                    <p style={{ margin: 0, lineHeight: "1.6" }}>{data.groeiVisie}</p>
                </div>

                <button 
                    onClick={() => setIsOverlayOpen(false)}
                    style={{
                        marginTop: "30px", padding: "12px 24px", backgroundColor: "transparent",
                        color: "#ff5c00", border: "2px solid #ff5c00", borderRadius: "30px",
                        fontSize: "16px", cursor: "pointer", fontWeight: "bold",
                        width: "100%", transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = "#ff5c00"; e.target.style.color = "white"; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#ff5c00"; }}
                >
                    Sluiten
                </button>
            </div>
        </div>
    );
}