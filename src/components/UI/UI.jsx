import React from "react";
import useScene from "../../store/useScene";

export default function UI() {
    const triggerReset = () => {
        window.dispatchEvent(new CustomEvent('reset-game'));
    };

    const viewMode = useScene((state) => state.viewMode);
    const setViewMode = useScene((state) => state.setViewMode);

     const toggleViewMode = () => {
        setViewMode(viewMode === "3d" ? "2d" : "3d");
    };

    return (
        <div style={{ position: "absolute", top: 80, right: 20, zIndex: 10, display: "flex", flexDirection: "column", gap: "10px" }}>
            <button 
                onClick={triggerReset}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#ff5c00",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    height: "38px",
                    width: "200px",
                }}
            >
                Reset positie
            </button>
        </div>
    );
}