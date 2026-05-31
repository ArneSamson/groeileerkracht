import React, { useRef } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useGLTF, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber' // 1. useFrame toegevoegd
import * as THREE from 'three'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

import { Kraan } from "./extra/Kraan";
import { Schep } from "./extra/Schep";
import { Sokkel } from "./Sokkel";
import { Tekentafel } from "./Tekentafel";
import { Drone } from "./Drone";

import { Klok } from "./Klok";

export default function UitdagingenPlain() {

    const isPlayerInside = useStore(useShallow((state) => state.enteredUitdagingenPlain));
    const setIsPlayerInside = useStore(useShallow((state) => state.setEnteredUitdagingenPlain));


    const plainsize = 25;
    const halfSize = plainsize / 2;
    const lineWidth = 0.5;

    const defaultColor = "#000000";
    const defaultEmissive = "#000000";

    const activeColor = "#00ffff"; 
    const activeEmissive = "#00ffff";

    const neonMaterial = (
        <meshStandardMaterial 
            color={isPlayerInside ? activeColor : defaultColor} 
            emissive={isPlayerInside ? activeEmissive : defaultEmissive} 
            emissiveIntensity={2.5} 
            toneMapped={false} 
        />
    );

    return (
        <>
            <group position={[35, 0.05, -35]}>
                
                <Text3D letterSpacing={0} size={1} font="/fonts/Inter_Bold.json" position={[-3, 0, 14]} rotation={[ - Math.PI / 4, 0, 0]} textAlign="center">
                    Uitdagingen
                    <meshStandardMaterial color="#ff5c00" />
                </Text3D>

                <Sokkel position={[-1, 1, -8]} scale={3} rotation={[0, 0, 0]} />
                <Klok position={[4, 1, -8]} scale={2.5} rotation={[0, 0, 0]} />
                <Tekentafel position={[9.5, 1, -8]} scale={3} rotation={[0, -Math.PI / 4, 0]} />
                <Drone position={[10, 1, 0]} scale={3} rotation={[0, 0, 0]} />

                <CuboidCollider 
                    type="fixed"
                    position={[0, 5, 0]} 
                    args={[halfSize, 5, halfSize]} 
                    sensor 
                    onIntersectionEnter={({ other }) => {
                        if (other.rigidBodyObject && other.rigidBodyObject.name === "player") {
                            console.log("Player entered the plain");
                            setIsPlayerInside(true);
                        }
                    }}
                    onIntersectionExit={({ other }) => {
                        if (other.rigidBodyObject && other.rigidBodyObject.name === "player") {
                            console.log("Player exited the plain");
                            setIsPlayerInside(false);
                        }
                    }}
                />

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
                <Kraan
                    position={[-8, 0, -8]}
                    scale={3}
                />
                <Schep
                    position={[11, 0, 10]}
                />
            </group>
        </>
    );
}

useGLTF.preload('/models/Uitdagingen.glb')