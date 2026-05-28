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
  
  // Haal setOverlayData uit de store in plaats van enkel setIsOverlayOpen
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

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
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  // De specifieke data voor dit object (Kwaliteit 1)
  const tandwielData = {
        titel: "1. Digitaal efficiënt organiseren",
      dlr: "De leraar als organisator",
      praktijk: "In mijn projectmatige SDG+-lessen is organisatie de ruggengraat van een succesvolle les. Omdat leerlingen in gemengde groepen om de vier weken doorschuiven, moet de leeromgeving vanaf minuut één intuïtief en feilloos werken. Ik maak intensief gebruik van digitale hulpmiddelen om rust en structuur te creëren. Observatoren gaven aan dat mijn integratie van gecentraliseerde platformen en visuele timers (zoals Classroomscreen) ervoor zorgt dat de lestiming strak gerespecteerd wordt. Ik automatiseer randzaken en routinetaken, zodat ik in de klas mijn handen en hoofd vrij heb om proactief te begeleiden in plaats van reactief te regelen.",
      beleidLink: "Aan de overlegtafel met Jeroen (directeur) en Steven (ICT-verantwoordelijke) voor het nieuwe ICT-beleid bleek deze hang naar digitale efficiëntie een strategische meerwaarde. We stonden voor de complexe uitdaging om tegen 1 september een overkoepelend ICT-plan voor Scholengroep 5 (SGR 5) klaar te hebben. Ik introduceerde de workspace 'Notion' om notulen te digitaliseren, actiepunten te verdelen en abstracte deadlines visueel en behapbaar te maken.",
      groeiVisie: "Deze ervaring heeft mijn visie op leiderschap veranderd. Goed leiderschap draait niet uitsluitend om vakkennis, maar fundamenteel om het stroomlijnen van processen zodat anderen beter kunnen werken. Die strakke, projectmatige structuur en efficiëntiedrang trek ik nu blijvend door naar het management van mijn eigen leslokaal."
    };

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;

    e.stopPropagation(); 
    
    // Open de overlay en geef de tandwielData mee
    setOverlayData(tandwielData);
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