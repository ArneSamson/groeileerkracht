
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function CenterConsole(props) {
  const { nodes, materials } = useGLTF('../../../public/models/CenterConsole.glb')
  const scaleMultiplier = 3; 

  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })

  return (
    <group {...props} dispose={null} scale={scaleMultiplier}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.Material}
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
    </group>

  )
}

useGLTF.preload('../../../public/models/CenterConsole.glb')