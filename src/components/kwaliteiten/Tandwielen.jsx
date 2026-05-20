import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RingGeometry } from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Tandwielen(props) {
  const { nodes, materials } = useGLTF('/models/Tandwielen.glb')
  
  const gear1Ref = useRef()
  const gear2Ref = useRef()
  const gear3Ref = useRef()

  const enteredKwaliteitenPlain = useStore(useShallow((state) => state.enteredKwaliteitenPlain))
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setIsOverlayOpen = useStore(useShallow((state) => state.setIsOverlayOpen));

  useFrame((state, delta) => {

    if (isOverlayOpen) return;

    const speed = 1; 

    if (gear1Ref.current && gear2Ref.current && gear3Ref.current) {
      
      gear1Ref.current.rotation.z -= speed * delta / 0.75;
      
      gear2Ref.current.rotation.z -= speed * delta / 0.75;
      
      gear3Ref.current.rotation.z += speed * delta;
    }
  })



  const handlePointerOver = () => {
    if (!enteredKwaliteitenPlain) return
    (document.body.style.cursor = 'pointer')
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;

    e.stopPropagation(); 
    setIsOverlayOpen(true);
    // window.dispatchEvent(new CustomEvent('open-overlay')); 
  }

  return (
    <group
        {...props}
        dispose={null}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
    >
        <mesh

            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.69, 0]}
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
            position={[-0.40, -0.1, 0]}
            ref={gear1Ref}
            castShadow
            receiveShadow
            geometry={nodes.Torus001.geometry}
            material={nodes.Torus001.material}
        />
        <mesh
            position={[0.30, -0.30, 0]}
            ref={gear2Ref}
            castShadow
            receiveShadow
            geometry={nodes.Torus003.geometry}
            material={nodes.Torus003.material}
        />
        <mesh
            ref={gear3Ref}
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={nodes.Torus002.material}
        />
    </group>
  )
}

// Pas het pad hier ook aan naar een absoluut pad vanaf de public folder
useGLTF.preload('/models/Tandwielen.glb')