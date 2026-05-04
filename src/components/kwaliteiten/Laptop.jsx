import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RingGeometry } from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/Laptop.glb')

  const enteredKwaliteitenPlain = useStore(
    useShallow((state) => state.enteredKwaliteitenPlain)
  )

  const handlePointerOver = () => {
    if (!enteredKwaliteitenPlain) return
    (document.body.style.cursor = 'pointer')
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;

    e.stopPropagation(); 
    // window.dispatchEvent(new CustomEvent('open-overlay')); 
  }

  return (
    <group
      {...props}
      dispose={null}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}>
      <mesh

          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.3, 0]}
      >
          <ringGeometry args={[0.6, 0.8, 32]} />
          <meshToonMaterial color="#000"/>
      </mesh>
      <RigidBody>
          <mesh
              position={[0, -0.2, 0]}
          >
              <cylinderGeometry args={[0.8, 0.8, 1, 8]} />
              <meshToonMaterial transparent={true} opacity={0} />
          </mesh>
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0, 0.488, 0.135]}
        rotation={[0.346, 0, 0]}
        scale={[0.315, 0.018, 0.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0, 0.923, -0.204]}
        rotation={[-1.673, 0, 0]}
        scale={[0.315, 0.018, 0.315]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.015, 0.559, 0]}
        scale={[0.038, 0.038, 0.016]}
      />
    </group>
  )
}

useGLTF.preload('/models/Laptop.glb')