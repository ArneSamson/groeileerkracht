import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../../store/useScene";

export function Schep(props) {
    const { nodes, materials } = useGLTF('/models/Uitdagingen2.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials['Material.009']}
        position={[0, -0.274, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.002']}
        position={[1.105, 1.691, -0.487]}
        rotation={[-0.826, -1.155, -0.602]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials['Material.001']}
        position={[0.818, 0.391, -0.145]}
        rotation={[-0.826, -1.155, -0.602]}
        scale={[0.456, 0.478, 0.107]}
      />
    </group>
  )
}

useGLTF.preload('/models/Uitdagingen2.glb')