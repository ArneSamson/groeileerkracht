import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function Test() {
    const cubeRef = useRef();

    const [keys, setKeys] = useState({ arrowup: false, arrowdown: false, arrowleft: false, arrowright: false });

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

        if (keys.arrowup) {
            torque.x = -torqueStrength;
        } else if (keys.arrowdown) {
            torque.x = torqueStrength;
        } else if (keys.arrowleft) {
            torque.z = torqueStrength;
        } else if (keys.arrowright) {
            torque.z = -torqueStrength;
        } else {
            cubeRef.current.setAngularDamping(1); // high damping to quickly stop rotation when no keys are pressed
        }

        if (torque.x !== 0 || torque.z !== 0) {
            cubeRef.current.applyTorqueImpulse(torque, true);
        }

        const cubePosition = cubeRef.current.translation();

        const idealCameraPosition = new THREE.Vector3(
            cubePosition.x,
            cubePosition.y + 10,
            cubePosition.z + 20
        );

        state.camera.position.lerp(idealCameraPosition, 0.1);

        const lookAtTarget = new THREE.Vector3(cubePosition.x, cubePosition.y, cubePosition.z);
        state.camera.lookAt(lookAtTarget);

        // remove all torques when no keys are pressed to prevent out of control spinning when the keyboard is not touched
        // if (!keys.arrowup || !keys.arrowdown || !keys.arrowleft || !keys.arrowright) {
        //     cubeRef.current.setAngularDamping(1); // high damping to quickly stop rotation
        // }
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
                    <meshToonMaterial color="#ff5c00" />
                </mesh>
            </RigidBody>
        </>
    );
}