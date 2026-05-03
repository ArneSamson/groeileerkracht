import React from "react";

export default function UI() {
    const triggerReset = () => {
        window.dispatchEvent(new CustomEvent('reset-game'));
    };

    return (
        <div style={{ position: "absolute", top: 20, right: 20, zIndex: 10 }}>
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
                    fontWeight: "bold"
                }}
            >
                Reset positie
            </button>
        </div>
    );
}