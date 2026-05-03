import { Shadow, SoftShadows } from "@react-three/drei";
import React from "react";

export default function Lights() {
    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight
                castShadow
                position={[2, 2, 2]}
                intensity={1.5}
                shadow-mapSize={[2048, 2048]}
                shadow-camera-near={0.1}
                shadow-camera-far={100}
                shadow-camera-top={50}
                shadow-camera-right={50}
                shadow-camera-bottom={-50}
                shadow-camera-left={-50}
                shadow-bias={0.0}
                shadow-normalBias={0}
            />
        </>
    );
}