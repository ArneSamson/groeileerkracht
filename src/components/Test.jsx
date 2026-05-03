import React, { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function Test() {
    const cubeRef = useRef();

    // 1. State om bij te houden of de linkermuisknop is ingedrukt
    const [isPointerDown, setIsPointerDown] = useState(false);

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
                // 1. Verplaats de kubus terug naar de startpositie (X=0, Y=2, Z=0)
                cubeRef.current.setTranslation({ x: 0, y: 2, z: 0 }, true);
                
                // 2. Verwijder alle voorwaartse snelheid (lineaire snelheid naar 0)
                cubeRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
                
                // 3. Verwijder alle rotatiesnelheid (stop met tollen)
                cubeRef.current.setAngvel({ x: 0, y: 0, z: 0 }, true);
                
                // 4. Zet de rotatie-hoek weer kaarsrecht
                cubeRef.current.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
            }
        };

        // Luister naar het signaal vanuit de UI
        window.addEventListener('reset-game', handleReset);

        return () => {
            window.removeEventListener('reset-game', handleReset);
        };
    }, []);

    // 2. Definieer een onzichtbaar wiskundig vlak op hoogte Y=0 (jouw vloer)
    // useMemo voorkomt dat we dit object 60 keer per seconde opnieuw aanmaken
    const floorPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);

    useFrame((state) => {
        if (!cubeRef.current) return;

        const cubePosition = cubeRef.current.translation();

        if (isPointerDown) {
            // 3. Bepaal waar de muis zich bevindt in de 3D-wereld
            const targetPoint = new THREE.Vector3();
            // Stuur een onzichtbare straal (ray) vanuit de camera door de muispositie
            state.raycaster.setFromCamera(state.pointer, state.camera);
            // Kijk waar deze straal de vloer (Y=0) raakt
            state.raycaster.ray.intersectPlane(floorPlane, targetPoint);

            if (targetPoint) {
                // 4. Bepaal de richting van de kubus naar het muispunt
                const cubeVec = new THREE.Vector3(cubePosition.x, cubePosition.y, cubePosition.z);
                const direction = targetPoint.clone().sub(cubeVec);
                
                // We willen alleen over de grond rollen, dus negeren we hoogteverschillen
                direction.y = 0;

                // 5. Bouw een dode zone in: stop met rollen als de kubus de muis (bijna) heeft bereikt
                if (direction.length() > 0.5) {
                    direction.normalize(); // Maak de vector precies 1 eenheid lang voor consistente snelheid

                    // 6. Vectorwiskunde: Om vooruit te rollen, moet je draaien rond een as die haaks staat op je beweegrichting.
                    // Het kruisproduct (cross) van de vector "omhoog" (0, 1, 0) en de "richting" geeft de juiste X/Z draai-as.
                    const up = new THREE.Vector3(0, 1, 0);
                    const torqueAxis = up.clone().cross(direction).normalize();

                    const torqueStrength = 0.2; // Mag iets hoger zijn voor vlotte muisbesturing

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

        state.camera.position.lerp(idealCameraPosition, 0.1);

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
                    <meshToonMaterial color="#ff5c00" />
                </mesh>
            </RigidBody>
        </>
    );
}