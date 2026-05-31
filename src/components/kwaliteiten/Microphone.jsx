import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RingGeometry } from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Microphone(props) {
  const { nodes, materials } = useGLTF('/models/Microphone.glb')
  
  const microphoneRef = useRef()

  const enteredKwaliteitenPlain = useStore(useShallow((state) => state.enteredKwaliteitenPlain))
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  useFrame((state) => {
    if (microphoneRef.current) {
      microphoneRef.current.position.y = 0.6 +  Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  })

  const handlePointerOver = () => {
    if (!enteredKwaliteitenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const microphoneData = {
      titel: "5. Professioneel taalbewustzijn",
      dlr: "Schriftelijke en mondelinge taal",
      praktijk: "Tijdens mijn traject heb ik bewust stappen gezet in mijn taalgebruik. Waar ik door mijn enthousiasme soms in informele spreektaal verviel, let ik er nu veel meer op om een verzorgde instructietaal te hanteren met duidelijke signaalwoorden. Ik merk dat die helderheid de leerlingen helpt. Daarnaast moedig ik leerlingen respectvol aan om ook onderling beleefd te communiceren, wat bijdraagt aan een veilig klasklimaat. Ik leer hier zelf nog elke dag in bij, maar ik zie intussen wel een duidelijke, positieve evolutie.",
      beleidLink: "Het meeschrijven aan het ICT-beleidsplan voor SGR 5 was op dit vlak een erg leerrijke uitdaging. Een beleidstekst vraagt om een heldere, formele formulering zonder ruis. Ook de pitch voor de internationale OECD-delegatie dwong me om ons verhaal zo professioneel en begrijpelijk mogelijk over te brengen. En dat moest dan ook nog eens in het Engels. Het deed me stilstaan bij de impact van een doordachte en afgestemde boodschap.",
      groeiVisie: "Die ervaringen buiten het klaslokaal hebben me geleerd dat heldere communicatie cruciaal is om mensen mee te krijgen. Ik neem dit mee om mijn instructies in de klas steeds beter af te stemmen, met het besef dat professioneel taalbewustzijn een continu leerproces is waar ik als leerkracht blijvend aan wil schaven."
    };

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;

    e.stopPropagation(); 
    
    setOverlayData(microphoneData);
  }

  return (
    <group {...props} dispose={null} onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
        <ringGeometry args={[0.6, 0.8, 32]} />
        <meshToonMaterial color="#000"/>
      </mesh>
      
      <RigidBody type="fixed">
        <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[1, 1, 3, 8]} />
            <meshToonMaterial transparent={true} opacity={0} />
        </mesh>
      </RigidBody>
      <group ref={microphoneRef} scale={0.5} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.Material}
          position={[0, 0.536, 0]}
          scale={[1, 2.234, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.002']}
          position={[0, 3.439, 0]}
          scale={3.194}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus006.geometry}
          material={materials.Material}
          position={[0, 3.378, 0]}
          scale={[1.171, 1.025, 1.171]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['Material.002']}
          position={[0.672, 1.977, 0]}
          scale={0.262}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus005.geometry}
          material={materials['Material.001']}
          position={[0, 2.473, 0]}
          scale={[0.857, 0.75, 0.857]}
        />
      </group>
    </group>
  )
}

// Pas het pad hier ook aan naar een absoluut pad vanaf de public folder
useGLTF.preload('/models/Microphone.glb')