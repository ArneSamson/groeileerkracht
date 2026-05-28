import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import useStore from "../store/useScene";

export default function Player() {
    const cubeRef = useRef();

    const [isPointerDown, setIsPointerDown] = useState(false);

    const isOverlayOpen = useStore((state) => state.isOverlayOpen);

    useEffect(() => {
        // We gebruiken pointer events, dit werkt direct voor zowel muis als touchscreens
        const handlePointerDown = () => setIsPointerDown(true);
        const handlePointerUp = () => setIsPointerDown(false);

        window.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointerup", handlePointerUp);

        return () => {
            window.removeEventListener("pointerdown", handlePointerDown);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, []);

    useEffect(() => {
        const handleReset = () => {
            if (cubeRef.current) {
                cubeRef.current.setTranslation({ x: 0, y: 2, z: 7 }, true);
                
                cubeRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
                
                cubeRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                
                cubeRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
            }
        };

        window.addEventListener('reset-game', handleReset);

        return () => {
            window.removeEventListener('reset-game', handleReset);
        };
    }, []);

    const floorPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);

    const targetPoint = new THREE.Vector3();
    const cubeVec = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    const lookAtTarget = new THREE.Vector3(0, 0, 0);

    useFrame((state, delta) => {
        if (!cubeRef.current) return;

        const cubePosition = cubeRef.current.translation();

        if(isOverlayOpen) return;

        if (isPointerDown) {            
            state.raycaster.setFromCamera(state.pointer, state.camera);
            state.raycaster.ray.intersectPlane(floorPlane, targetPoint);

            if (targetPoint) {
                // const cubeVec = new THREE.Vector3(cubePosition.x, cubePosition.y, cubePosition.z);
                cubeVec.set(cubePosition.x, cubePosition.y, cubePosition.z);
                const direction = targetPoint.clone().sub(cubeVec);
                
                direction.y = 0;

                if (direction.length() > 0.5) {
                    direction.normalize(); 

                    // const up = new THREE.Vector3(0, 1, 0);

                    const torqueAxis = up.clone().cross(direction).normalize();

                    const torqueStrength = 2;

                    cubeRef.current.applyTorqueImpulse({
                        x: torqueAxis.x * torqueStrength,
                        y: torqueAxis.y * torqueStrength,
                        z: torqueAxis.z * torqueStrength
                    }, true);
                }
            }
        }

        const idealCameraPosition = new THREE.Vector3(
            cubePosition.x,
            cubePosition.y + 10,
            cubePosition.z + 20
        );

        state.camera.position.lerp(idealCameraPosition, 1 - Math.exp(-5 * delta));
        
        // const lookAtTarget = new THREE.Vector3(cubePosition.x, cubePosition.y, cubePosition.z);
        lookAtTarget.set(cubePosition.x, cubePosition.y, cubePosition.z);

        state.camera.lookAt(lookAtTarget);
    });

    return (
        <>
            <RigidBody 
                name="player"
                ref={cubeRef} 
                colliders="ball" 
                position={[0, 2, 7]} 
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