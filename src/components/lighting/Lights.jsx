import { Shadow, SoftShadows } from "@react-three/drei";
import React from "react";

export default function Lights() {

    const mapSizeMultiplyer = 3;
    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight
                castShadow
                position={[50, 50, 50]}
                intensity={1}
                shadow-mapSize={[1024 * mapSizeMultiplyer, 1024 * mapSizeMultiplyer]}
                shadow-camera-near={0.1}
                shadow-camera-far={250}
                shadow-camera-top={70}
                shadow-camera-right={70}
                shadow-camera-bottom={-70}
                shadow-camera-left={-70}
                shadow-bias={-0.00005}
                shadow-normalBias={0}
            />
        </>
    );
}