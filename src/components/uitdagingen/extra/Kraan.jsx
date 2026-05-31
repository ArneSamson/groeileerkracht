import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../../store/useScene";

export function Kraan(props) {
    const { nodes, materials } = useGLTF('/models/Uitdagingen.glb')

    // 2. Referentie en state voor de kraanarm
    const kraanArmRef = useRef()
    const kraanState = useRef({
        targetRotation: 0,
        timer: 0
    });

    // Voeg isOverlayOpen toe zodat we de zware kraan kunnen pauzeren als de theorie open is
    const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));

    // 3. De animatie loop
    useFrame((state, delta) => {
        if (isOverlayOpen) return;

        if (kraanArmRef.current) {
            kraanState.current.timer -= delta;

            if (kraanState.current.timer <= 0) {
                // Genereer een random draai tussen -60 en +60 graden (in radialen)
                const randomZwaai = (Math.random() - 0.5) * (Math.PI / 1.5);
                kraanState.current.targetRotation = randomZwaai;

                // Omdat het een zware kraan is, wachten we lang (tussen de 3 en 8 seconden)
                // voor we een nieuwe windvlaag / richting bepalen.
                kraanState.current.timer = 1 + Math.random() * 5;
            }

            // Vloeiende, TRAGE rotatie. Door delta * 0.5 te gebruiken voelt de kraan enorm zwaar aan.
            kraanArmRef.current.rotation.y = THREE.MathUtils.lerp(
                kraanArmRef.current.rotation.y,
                kraanState.current.targetRotation,
                delta * 0.5 
            );
        }
    });

  return (
    <group 
        {...props}
        dispose={null}
    >
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={materials['Material.008']}
            position={[0, -0.274, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials['Material.001']}
            position={[-0.612, 1.118, 0]}
        />

        {/* 4. Koppel de ref aan de groep die draait en we verwijderen de hardcoded rotation */}
        <group
            ref={kraanArmRef}
            position={[-0.612, 2.34, 0]} 
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.boom.geometry}
                material={materials['Material.001']}
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.contragewicht.geometry}
                material={materials.Material}
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.kabel.geometry}
                material={materials['Material.002']}
                position={[0, 0, 0]} 
                rotation={[0, 0, 0]} 
            />
        </group>
    </group>
  )
}

useGLTF.preload('/models/Uitdagingen.glb')