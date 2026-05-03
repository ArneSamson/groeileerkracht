import React from "react";
import { RigidBody } from "@react-three/rapier";
import { Tandwielen } from "./Tandwielen";

export default function KwaliteitsPlain() {

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
            <group position={[-35, 0.05, -35]}>

                <Tandwielen position={[-7, 3, -5]} scale={4} rotation={[0, 1, 0]} />
                
                <group>
                    <mesh position={[0, 0, -halfSize]}>
                        <boxGeometry args={[plainsize + 0.5, 0.1, lineWidth]} />
                        {neonMaterial}
                    </mesh>
                    
                    <mesh position={[0, 0, halfSize]}>
                        <boxGeometry args={[plainsize + 0.5, 0.1, lineWidth]} />
                        {neonMaterial}
                    </mesh>
                    
                    <mesh position={[halfSize, 0, 0]}>
                        <boxGeometry args={[lineWidth, 0.1, plainsize + 0.5]} />
                        {neonMaterial}
                    </mesh>
                    
                    <mesh position={[-halfSize, 0, 0]}>
                        <boxGeometry args={[lineWidth, 0.1, plainsize + 0.5]} />
                        {neonMaterial}
                    </mesh>
                </group>

            </group>
        </>
    );
}