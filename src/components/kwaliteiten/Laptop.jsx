import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RingGeometry } from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/react/shallow' // Let op: in recente zustand versies is dit 'zustand/react/shallow'
import useStore from "../../store/useScene";

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/Laptop.glb')

  // 1. Maak een referentie aan voor de groep die we willen animeren
  const laptopRef = useRef()

  const enteredKwaliteitenPlain = useStore(
    useShallow((state) => state.enteredKwaliteitenPlain)
  )
  
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  const laptopData = {
      titel: "2. Doelgerichte media-integratie en AI-bewustzijn",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "Ik zet technologie en media uiterst doelgericht in om leerstof te verankeren, maar ik ben me evengoed bewust van de valkuilen, zoals generatieve AI. In mijn informaticalessen leer ik leerlingen enerzijds hoe ze AI als tool kunnen gebruiken, maar waak ik er anderzijds streng over dat het hun eigen denkproces niet vervangt. Ik houd gericht toezicht op de laptops en heb het snel door wanneer leerlingen AI als sluipweg gebruiken, bijvoorbeeld wanneer ze plots programmeeropdrachten indienen met code of syntax die we in de les nog nooit gezien hebben.",
      beleidLink: "Tijdens het uitschrijven van het ICT-beleid nam ik de snelle, digitale optimalisaties uit handen van de directie. Hierdoor kregen Jeroen en Steven de mentale ruimte om zich te focussen op de strategische aanpak rond AI en evaluatiemethodes. Doordat ik razendsnel overweg kan met de nieuwste software, fungerde ik als de brug tussen de beleidsvisie op technologie en de praktische uitvoering ervan.",
      groeiVisie: "Technologie geeft me de vrijheid om te schakelen, maar vraagt ook om waakzaamheid. Media en AI zijn voor mij geen doelen op zich, maar hulpmiddelen. Ik blijf mezelf trainen in het herkennen van digitaal misbruik, zodat technologie het leerproces ondersteunt en niet ondermijnt."
    };

  // 2. De animatie loop
  useFrame((state) => {
    if (laptopRef.current) {
      // state.clock.elapsedTime is de tijd in seconden sinds de game gestart is.
      // Math.sin() genereert hierdoor een vloeiende golf tussen -1 en 1.
      // Vermenigvuldig de tijd om de snelheid aan te passen (bijv. * 2 is sneller).
      // Vermenigvuldig de uitkomst om de hoogte (amplitude) aan te passen (bijv. * 0.1 is 10cm op en neer).
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  })

  const handlePointerOver = () => {
    if (!enteredKwaliteitenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;
    e.stopPropagation(); 
    setOverlayData(laptopData);
  }

  return (
    <group
      {...props}
      dispose={null}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}>
      
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

      {/* 3. Wikkel enkel de meshes van de laptop in de ref-groep */}
      <group ref={laptopRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Material}
          position={[0, 0.488, 0.135]}
          rotation={[0.346, 0, 0]}
          scale={[0.315, 0.018, 0.315]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Material}
          position={[0, 0.923, -0.204]}
          rotation={[-1.673, 0, 0]}
          scale={[0.315, 0.018, 0.315]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['Material.001']}
          position={[0.015, 0.559, 0]}
          scale={[0.038, 0.038, 0.016]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['Material.002']}
          position={[0, 0.923, -0.204]}
          rotation={[-1.673, 0, 0]}
          scale={[0.315, 0.018, 0.315]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/Laptop.glb')