import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RingGeometry } from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Rubiks(props) {
  const { nodes, materials } = useGLTF('/models/Rubiks.glb')
  
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
      titel: "3. Een innovatieve, frisse blik op onderwijs",
      dlr: "Innovator/Onderzoeker & De gepassioneerde leraar (OLR)",
      praktijk: "Ik weiger theorie in een vacuüm te geven. Ik start lessen vanuit actuele situaties die direct aansluiten bij de jongeren. Collega's, maar vooral de leerlingen, waarderen mijn moderne, leefwereldgerichte aanpak. We experimenteren continu met manieren om onze didactiek te wapenen tegen de opmars van AI. Zo vervangen we standaard boekbesprekingen (die een chatbot in 2 seconden genereert) door opdrachten rond minder bekende boeken met zeer specifieke detailvragen. We forceren leerlingen op een positieve manier om de theorie écht tot zich te nemen.",
      beleidLink: "Een absoluut hoogtepunt van mijn profileringsstage was het pitchen van ons didactisch ICT-beleid aan een internationale delegatie van de OECD, de Europese Commissie en Kenniscentrum DigiSprong. Ik had al het werk van mezelf en een collega fysiek afgedrukt om de 'classroom reality' tastbaar te maken voor deze experten. Aan de hand van de 'pencil metaphor' illustreerde ik hoe technologie op BA Pitzemburg ook kwetsbaar is voor mensen die te snel op technologie vliegen en collega's die koppig bij het vetrouwde blijven. Ten slotte deelde ik onze plannen en aanpak rond AI-beleid en evaluatieaanpassingen.",
      groeiVisie: "De mogelijkheid om onze visie op zo'n hoog niveau te delen, en de positieve respons van de delegatie, versterkt mijn drive enorm. Ik zal vastgeroeste processen blijvend in vraag stellen en blijf experimenteren met nieuwe didactische invalshoeken om het onderwijs actueel en fraude-proof te houden."
    };

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;

    e.stopPropagation(); 
    
    setOverlayData(kompasData);
  }

  return (
    <group {...props} dispose={null} onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
        <ringGeometry args={[0.7, 0.9, 32]} />
        <meshToonMaterial color="#000"/>
      </mesh>
      
      <RigidBody type="fixed">
        <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.7, 0.8, 1, 8]} />
            <meshToonMaterial transparent={true} opacity={0} />
        </mesh>
      </RigidBody>
      <group ref={kompasRef} scale={0.5} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
        <group
          rotation={[0, 0, Math.PI / 1.5]}
        >
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials['Material.004']}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube016.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube018.geometry}
              material={materials['Material.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube019.geometry}
              material={materials['Material.007']}
            />
          </mesh>
        </group>
        <group
          rotation={[0, 0, -Math.PI / 1.5]}
        >
          <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['Material.002']}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials['Material.007']}
          />
        </mesh>
        </group>
        <group
          rotation={[0, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials['Material.002']}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012.geometry}
              material={materials['Material.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013.geometry}
              material={materials['Material.007']}
            />
          </mesh>
        </group>
      </group>
    </group>
  )
}

// Pas het pad hier ook aan naar een absoluut pad vanaf de public folder
useGLTF.preload('/models/Rubiks.glb')