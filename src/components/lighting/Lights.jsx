import { Shadow, SoftShadows } from "@react-three/drei";
import React from "react";

export default function Lights() {
    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight
                castShadow
                position={[2, 0.5, 5]}
                intensity={1.5}
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={0.1}
                shadow-camera-far={10}
                shadow-camera-top={5}
                shadow-camera-right={5}
                shadow-camera-bottom={-4}
                shadow-camera-left={-5}
                shadow-bias={0.0}
                shadow-normalBias={0}
            />
        </>
    );
}