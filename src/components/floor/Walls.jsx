import React from "react";
import { RigidBody } from "@react-three/rapier";

export default function Walls() {
    const wallThickness = 1;
    const wallHeight = 10;
    const planeSize = 100;
    const halfSize = planeSize / 2;

    const lineWidth = 0.5;

    const neonMaterial = (
        <meshStandardMaterial 
            color="#ff5c00" 
            emissive="#692700" 
            emissiveIntensity={2.5} 
            toneMapped={false} 
        />
    );

    const mistMaterial = <meshStandardMaterial transparent opacity={0} color="#fdfdfc" />;

    return (
        <>
            <RigidBody type="fixed" position={[0, wallHeight / 2, -halfSize]}>
                <mesh receiveShadow>
                    <boxGeometry args={[planeSize, wallHeight, wallThickness]} />
                    {mistMaterial}
                </mesh>
            </RigidBody>
            
            <RigidBody type="fixed" position={[0, wallHeight / 2, halfSize]}>
                <mesh receiveShadow>
                    <boxGeometry args={[planeSize, wallHeight, wallThickness]} />
                    {mistMaterial}
                </mesh>
            </RigidBody>
            
            <RigidBody type="fixed" position={[halfSize, wallHeight / 2, 0]}>
                <mesh receiveShadow>
                    <boxGeometry args={[wallThickness, wallHeight, planeSize]} />
                    {mistMaterial}
                </mesh>
            </RigidBody>
            
            <RigidBody type="fixed" position={[-halfSize, wallHeight / 2, 0]}>
                <mesh receiveShadow>
                    <boxGeometry args={[wallThickness, wallHeight, planeSize]} />
                    {mistMaterial}
                </mesh>
            </RigidBody>

            <group position={[0, 0.05, 0]}>
                
                <mesh position={[0, 0, -halfSize]}>
                    <boxGeometry args={[planeSize+0.5, 0.1, lineWidth]} />
                    {neonMaterial}
                </mesh>
                
                <mesh position={[0, 0, halfSize]}>
                    <boxGeometry args={[planeSize+0.5, 0.1, lineWidth]} />
                    {neonMaterial}
                </mesh>
                
                <mesh position={[halfSize, 0, 0]}>
                    <boxGeometry args={[lineWidth, 0.1, planeSize+0.5]} />
                    {neonMaterial}
                </mesh>
                
                <mesh position={[-halfSize, 0, 0]}>
                    <boxGeometry args={[lineWidth, 0.1, planeSize+0.5]} />
                    {neonMaterial}
                </mesh>

            </group>
        </>
    );
}