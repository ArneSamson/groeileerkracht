import { Shadow, SoftShadows } from "@react-three/drei";
import React from "react";
import * as THREE from "three";

export default function Test() {

    return (
        <>
            <mesh
                position={[0, 0.5, 0]}
                castShadow={true}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshToonMaterial
                    color={'#ff5c00'}                    
                    // gradientMap={gradientMap}
                    />
            </mesh>
        </>
    );
}