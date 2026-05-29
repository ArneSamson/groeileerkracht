
import React, { useRef } from 'react'
import { useGLTF, Text3D } from '@react-three/drei'
import * as THREE from 'three'
import HolographicMaterial from '../../helper/HolographicMaterial.jsx'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/react/shallow'
import useStore from "../../store/useScene";



export function CenterConsole(props) {
    const { nodes, materials } = useGLTF('/models/CenterConsole.glb')
    const scaleMultiplier = 3; 

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff })

    const isTimelineOpen = useStore(useShallow((state) => state.isTimelineOpen));
    const setIsTimelineOpen = useStore(useShallow((state) => state.setIsTimelineOpen)); 

    const handlePointerOver = () => {
        document.body.style.cursor = 'pointer'
    } 
    const handlePointerOut = () => (document.body.style.cursor = 'auto')

    const handleClick = (e) => {
        e.stopPropagation(); 
        setIsTimelineOpen(!isTimelineOpen);
        console.log("Timeline toggled:", !isTimelineOpen);
    }

  return (
    <>
        <group {...props} dispose={null} scale={scaleMultiplier} onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
        <RigidBody type="fixed" restitution={0.2} friction={0.7}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus.geometry}
                material={whiteMat}
            />
        </RigidBody>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.002']}
            position={[0, 0.267, 0.931]}
            rotation={[-0.474, 0, 0]}
            scale={0.036}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Material.001']}
            position={[0.103, 0.267, 0.931]}
            rotation={[-0.474, 0, 0]}
            scale={0.036}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Material.002']}
            position={[-0.105, 0.267, 0.931]}
            rotation={[-0.474, 0, 0]}
            scale={0.036}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials['Material.002']}
            position={[0, 0.094, 0.418]}
            scale={0.41}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials['Material.002']}
            position={[0.693, 0.094, 0.418]}
            rotation={[-Math.PI, 0, 0]}
            scale={-0.41}
        />
        <mesh
            position={[0, 1, 0]}
            // material={hologramMaterial}
        >
            <sphereGeometry args={[0.5, 32, 32]} />
            <HolographicMaterial
                fresnelAmount={0.2}
                fresnelOpacity={0.8}
                hologramBrightness={0.8}
                scanlineSize={6}
                signalSpeed={2.3}
                hologramColor={"#ff5c00"}
                enableBlinking={false}
                hologramOpacity={0.8}
            />
        </mesh>
        {/* <mesh
            position={[0, 0, -2]}
        >
            <boxGeometry args={[2, 2, 0.1]} />
            <meshStandardMaterial color="black" />
        </mesh> */}
        </group>


    </>
)
}

useGLTF.preload('/models/CenterConsole.glb')