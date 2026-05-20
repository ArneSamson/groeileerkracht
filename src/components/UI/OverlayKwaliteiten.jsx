import React, { useState, useEffect } from "react";
import useStore from "../../store/useScene";

export default function OverlayKwaliteiten() {

    const isOpen = useStore((state) => state.isOverlayOpen);
    const setIsOverlayOpen = useStore((state) => state.setIsOverlayOpen);

    // Als de overlay niet open is, render dan helemaal niets (null)
    if (!isOpen) return null;

    return (
        // De half-transparante achtergrond die het hele scherm vult
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // 60% zwart, dus je ziet de game er nog door!
            zIndex: 9999, // Zorgt dat dit overal bovenop ligt
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(3px)" // Optioneel: maakt de game op de achtergrond een beetje wazig
        }}>
            
            {/* De effectieve "Webpagina" in het midden */}
            <div style={{
                backgroundColor: "#fdfdfc",
                padding: "40px",
                borderRadius: "12px",
                maxWidth: "600px",
                width: "90%",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                fontFamily: "sans-serif",
                color: "#333",
                maxHeight: "80vh", // Voorkomt dat de pagina buiten het scherm valt
                overflowY: "auto"  // Maakt de tekst scrollbaar als het te lang wordt
            }}>
                <h1 style={{ marginTop: 0 }}>De werking van Tandwielen</h1>
                <p>
                    Tandwielen zijn getande wielen die beweging en kracht overbrengen. 
                    Wanneer het eerste tandwiel (het aandrijvende wiel) draait, 
                    zorgen de tanden ervoor dat het volgende wiel in de tegengestelde 
                    richting begint te draaien.
                </p>
                
                {/* Voeg hier gerust afbeeldingen of meer tekst toe voor je leerlingen */}

                <button 
                    onClick={() => setIsOverlayOpen(false)} // Sluit de pop-up
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        backgroundColor: "#ff5c00",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        width: "100%"
                    }}
                >
                    Terug naar het project
                </button>
            </div>

        </div>
    );
}