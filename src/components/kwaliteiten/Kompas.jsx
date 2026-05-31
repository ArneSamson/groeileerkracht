import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RingGeometry } from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Kompas(props) {
  const { nodes, materials } = useGLTF('/models/Kompas.glb')
  
  const kompasRef = useRef()
  // const gear2Ref = useRef()
  // const gear3Ref = useRef()

  const enteredKwaliteitenPlain = useStore(useShallow((state) => state.enteredKwaliteitenPlain))
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  
  // Haal setOverlayData uit de store in plaats van enkel setIsOverlayOpen
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  // useFrame((state, delta) => {
  //   if (isOverlayOpen) return;

  //   const speed = 1; 

  //   if (gear1Ref.current && gear2Ref.current && gear3Ref.current) {
  //     gear1Ref.current.rotation.z -= speed * delta / 0.75;
  //     gear2Ref.current.rotation.z -= speed * delta / 0.75;
  //     gear3Ref.current.rotation.z += speed * delta;
  //   }
  // })

  const handlePointerOver = () => {
    if (!enteredKwaliteitenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const kompasData = {
      titel: "4. Coachend begeleiden",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "Bij intensieve, zelfstandige opdrachten, zoals het bouwen van HTML/CSS-projecten of de studiekeuzecarrousel, neem ik een sterk coachende rol aan. Wanneer een leerling vastloopt, vermijd ik de reflex om het probleem onmiddellijk voor hen op te lossen. Ik pas 'Socratisch doorvragen' toe: via gerichte wedervragen help ik hen hun eigen denkproces te ontleden, zodat ze zelfstandig tot het antwoord komen. Observatoren prezen deze aanpak omdat het een veilige, stimulerende leeromgeving creëert.",
      beleidLink: "Aan de overlegtafel bij Jeroen en Steven, die over decennia aan gecombineerde onderwijservaring beschikken, stelde ik me eveneens ondersteunend op. Ik leerde daar een essentiële managementles: beleid maken (of lesgeven) betekent niet dat je zélf alle antwoorden moet hebben, maar wel dat je de juiste kaders en vragen moet formuleren om samen vooruitgang te boeken.",
      groeiVisie: "Dit diepgewortelde principe is nu meer present in mijn klaspraktijk. Ik weiger het leerproces van de leerlingen 'over te nemen'. Mijn taak is het ontwerpen van krachtige kaders en het stellen van de juiste vragen, zodat zij de vaardigheden ontwikkelen om het uiteindelijk volledig zelf te kunnen."
    };

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;

    e.stopPropagation(); 
    
    setOverlayData(kompasData);
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
      <group ref={kompasRef} scale={0.5} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus004.geometry}
        material={materials.Material}
        position={[0, 0.341, -0.169]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials['Material.002']}
        position={[0, 0.341, -0.151]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.353, 0.625, 0.194]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[-0.135, 1.239, 0.209]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.504}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials['Material.001']}
        position={[0.936, 0.206, 0.209]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.504}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials['Material.001']}
        position={[-0.111, -0.794, 0.209]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.504}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials['Material.001']}
        position={[-1.213, 0.198, 0.209]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.504}
      />
      </group>
    </group>
  )
}

// Pas het pad hier ook aan naar een absoluut pad vanaf de public folder
useGLTF.preload('/models/Kompas.glb')