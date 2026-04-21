import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function Test() {
    const cubeRef = useRef();

    const [keys, setKeys] = useState({ z: false, q: false, s: false, d: false });

    useEffect(() => {
        const handleKeyDown = (e) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: true }));
        const handleKeyUp = (e) => setKeys((k) => ({ ...k, [e.key.toLowerCase()]: false }));

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    useFrame((state) => {
        if (!cubeRef.current) return;

        const torqueStrength = 0.1; 
        const torque = { x: 0, y: 0, z: 0 };

        if (keys.z) torque.x = -torqueStrength;
        if (keys.s) torque.x = torqueStrength;
        if (keys.q) torque.z = torqueStrength;
        if (keys.d) torque.z = -torqueStrength;

        if (torque.x !== 0 || torque.z !== 0) {
            cubeRef.current.applyTorqueImpulse(torque, true);
        }

        // Haal de absolute wereldpositie van de kubus op uit Rapier
        const cubePosition = cubeRef.current.translation();

        // Bepaal waar we de camera willen hebben (bijv. 5 eenheden omhoog, 10 eenheden naar achteren)
        const idealCameraPosition = new THREE.Vector3(
            cubePosition.x,
            cubePosition.y + 5,
            cubePosition.z + 10
        );

        // Verplaats de camera soepel naar de ideale positie
        // De '0.1' is de snelheid: 1 is instant, 0.01 is erg traag en "zweverig"
        state.camera.position.lerp(idealCameraPosition, 0.1);

        // Zorg dat de camera altijd naar de kubus blijft kijken
        const lookAtTarget = new THREE.Vector3(cubePosition.x, cubePosition.y, cubePosition.z);
        state.camera.lookAt(lookAtTarget);
    });

    return (
        <>
            <RigidBody 
                ref={cubeRef} 
                colliders="cuboid" 
                position={[0, 2, 0]} 
                angularDamping={2} 
                linearDamping={0.8}
            >
                <mesh castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshToonMaterial color="red" />
                </mesh>
            </RigidBody>
        </>
    );
}