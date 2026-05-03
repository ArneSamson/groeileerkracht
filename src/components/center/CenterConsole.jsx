
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import HolographicMaterial from '../../helper/HolographicMaterial.jsx'

export function CenterConsole(props) {
  const { nodes, materials } = useGLTF('../../../public/models/CenterConsole.glb')
  const scaleMultiplier = 3; 

  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff })

  return (
    <>
        <group {...props} dispose={null} scale={scaleMultiplier}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus.geometry}
            material={whiteMat}
        />
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
            position={[0, 1, 0]}
            // material={hologramMaterial}
        >
            <sphereGeometry args={[0.5, 32, 32]} />
            <HolographicMaterial
                fresnelAmount={0.2}
                fresnelOpacity={0.8}
                hologramBrightness={0.2}
                scanlineSize={6}
                signalSpeed={2.3}
                hologramColor={"#ff5c00"}
                enableBlinking={false}
                hologramOpacity={0.8}
            />
        </mesh>
        <mesh
            position={[0, 0, -2]}
        >
            <boxGeometry args={[2, 2, 0.1]} />
            <meshStandardMaterial color="black" />
        </mesh>
        </group>


    </>
)
}

useGLTF.preload('../../../public/models/CenterConsole.glb')