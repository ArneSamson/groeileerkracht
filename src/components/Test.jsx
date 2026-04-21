import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

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

    useFrame(() => {
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
    });

    return (
        <>
            <RigidBody 
                ref={cubeRef} 
                colliders="cuboid" 
                position={[0, 2, 0]} 
                // angularDamping={2} 
                linearDamping={0.5}
            >
                <mesh castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshToonMaterial color="red" />
                </mesh>
            </RigidBody>
        </>
    );
}