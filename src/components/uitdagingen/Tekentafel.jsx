import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Tekentafel(props) {
  const { nodes, materials } = useGLTF('/models/Tekentafel.glb')
  
  const tekentafelRef = useRef()

  const enteredUitdagingenPlain = useStore(useShallow((state) => state.enteredUitdagingenPlain));
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  const handlePointerOver = () => {
    if (!enteredUitdagingenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const tekentafelData = {
      titel: "3. Visuele concretisering bij instructies",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "Wanneer ik instructies geef voor complexe opdrachten, zoals de syntax van JavaScript of ontwerpprincipes in Canva, ga ik er nog te snel van uit dat mijn mondelinge uitleg onmiddellijk begrepen wordt. Hierdoor haken leerlingen soms halverwege af omdat ze de draad kwijt zijn en geen fysieke of visuele houvast hebben om op terug te vallen.",
      beleidLink: "Dit werkpunt werd me pijnlijk duidelijk tijdens het uitschrijven van het ICT-beleid. Steven drukte me op het hart dat een beleidsdocument voor leerkrachten extreem visueel, stapsgewijs en behapbaar moet zijn. Nieuwe multifactor-authenticatie is voor veel volwassenen immers net zo overweldigend als het schrijven van een eerste script voor mijn leerlingen.",
      groeiVisie: "Als een vluchtige mondelinge uitleg op een personeelsvergadering niet volstaat voor ervaren collega's, is het een illusie te denken dat dit wel werkt voor jongeren. Het is nu mijn absolute vuistregel om complexe theorie altijd te onderbouwen met fysieke stappenplannen of heldere rubrics."
    };

  const handleClick = (e) => {
    if (!enteredUitdagingenPlain) return;
    e.stopPropagation(); 
    setOverlayData(tekentafelData);
  }

  return (
    <group {...props} dispose={null} onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
        <ringGeometry args={[0.6, 0.8, 32]} />
        <meshToonMaterial color="#000"/>
      </mesh>
      
      <RigidBody type="fixed">
        <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 1, 8]} />
            <meshToonMaterial transparent={true} opacity={0} />
        </mesh>
      </RigidBody>

    <group dispose={null} ref={tekentafelRef} scale={0.4} position={[0, -0.3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials.Material}
        position={[0, 1, -0.1]}
        rotation={[0.319, 0, 0]}
        scale={[1, 0.046, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials['Material.007']}
        position={[-0.023, 1.074, -0.1]}
        rotation={[0.319, 0, 0]}
        scale={[0.664, 0.031, 0.664]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.Material}
        position={[-0.023, 1.074, -0.1]}
        rotation={[0.319, 0, 0]}
        scale={[0.664, 0.031, 0.664]}
      />
    </group>
  </group> 
  )
}

useGLTF.preload('/models/Tekentafel.glb')