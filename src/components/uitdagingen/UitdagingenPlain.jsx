import React from "react";
import { RigidBody } from "@react-three/rapier";

export default function UitdagingenPlain() {

    const plainsize = 25;
    const halfSize = plainsize / 2;

    const lineWidth = 0.5;

    const neonMaterial = (
        <meshStandardMaterial 
            color="#ff5c00" 
            emissive="#692700" 
            emissiveIntensity={2.5} 
            toneMapped={false} 
        />
    );


    return (
        <>
            <group position={[35, 0.05, -35]}>
                
                {/* Noord lijn */}
                <mesh position={[0, 0, -halfSize]}>
                    <boxGeometry args={[plainsize, 0.1, lineWidth]} />
                    {neonMaterial}
                </mesh>
                
                {/* Zuid lijn */}
                <mesh position={[0, 0, halfSize]}>
                    <boxGeometry args={[plainsize, 0.1, lineWidth]} />
                    {neonMaterial}
                </mesh>
                
                {/* Oost lijn */}
                <mesh position={[halfSize, 0, 0]}>
                    <boxGeometry args={[lineWidth, 0.1, plainsize]} />
                    {neonMaterial}
                </mesh>
                
                {/* West lijn */}
                <mesh position={[-halfSize, 0, 0]}>
                    <boxGeometry args={[lineWidth, 0.1, plainsize]} />
                    {neonMaterial}
                </mesh>

            </group>
        </>
    );
}