import React from "react";
import { useState } from "react";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Tandwielen } from "./Tandwielen";
import { Laptop } from "./Laptop";
import {Kompas} from "./Kompas";
import { Rubiks } from "./Rubiks";
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export default function KwaliteitsPlain() {

    const isPlayerInside = useStore(useShallow((state) => state.enteredKwaliteitenPlain));
    const setIsPlayerInside = useStore(useShallow((state) => state.setEnteredKwaliteitenPlain));

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
            <group position={[-35, 0.05, -35]}>

                <Tandwielen position={[-7, 3, -3]} scale={4} rotation={[0, 1, 0]} />
                <Laptop position={[7, 1, -5]} scale={3} rotation={[0, 0, 0]} />
                <Kompas position={[0, 1, -5]} scale={3} rotation={[0, 0, 0]} />
                <Rubiks position={[-7, 1, 4]} scale={2} rotation={[0, -1, 0]} />

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

            </group>
        </>
    );
}