import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Sokkel(props) {
  const { nodes, materials } = useGLTF('/models/Sokkel.glb')
  
  const sokkelRef = useRef()

  const enteredUitdagingenPlain = useStore(useShallow((state) => state.enteredUitdagingenPlain));
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  const handlePointerOver = () => {
    if (!enteredUitdagingenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const sokkelData = {
      titel: "1. Zelfvertrouwen als expert (het 'imposter syndroom')",
      dlr: "De leraar als inhoudelijk expert",
      praktijk: "Als leerkracht informaticawetenschappen word ik regelmatig geconfronteerd met bijzonder pittige, technische vragen. Omdat ik de lat voor mezelf extreem hoog leg, twijfel ik soms aan mijn autoriteit wanneer ik niet in een fractie van een seconde een pasklaar antwoord heb. Die interne druk leidde in het verleden soms tot onzekerheid voor de groep.",
      beleidLink: "Dit 'imposter syndrome' bereikte een hoogtepunt in de ICT-werkgroep. Terwijl Jeroen en Steven moeiteloos goochelden met budgetten en campusoverschrijdende protocollen, voelde ik me vaak klein. Toch overwon ik dit gevoel volledig tijdens het bezoek van de OECD en de Europese Commissie. Ik stond daar als startende leerkracht ons didactisch beleid te pitchen. Ik besefte toen dat mijn specifieke blik op de 'classroom reality' voor hen exact de expertise was die ze zochten.",
      groeiVisie: "Die presentatie was een kantelpunt. Het deed me beseffen dat expertise geen statisch einddoel is waarbij je alles weet, maar een continu groeiproces. Ik durf nu ook voor de klas met zelfvertrouwen te zeggen: 'Dat is een ijzersterke vraag, laten we die theorie samen uitspitten.' Leren van anderen is een bewijs van kracht."
    };

  const handleClick = (e) => {
    if (!enteredUitdagingenPlain) return;
    e.stopPropagation(); 
    setOverlayData(sokkelData);
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

    <group dispose={null} ref={sokkelRef} position={[0, -0.3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials['Material.010']}
        position={[-0.468, 0.438, 0.208]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.Material}
        position={[0, 0.041, 0]}
        scale={0.334}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials['Material.010']}
        position={[0.437, 0.439, -0.259]}
      />
    </group>
  </group> 
  )
}

useGLTF.preload('/models/Sokkel.glb')