import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Klok(props) {
  const { nodes, materials } = useGLTF('/models/Klok.glb')
  
  const klokRef = useRef()
  const needleRef = useRef()

  const enteredUitdagingenPlain = useStore(useShallow((state) => state.enteredUitdagingenPlain));
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  const startOffset = Math.PI / 2.5;

  // 1. We breiden de status uit met specifieke bounce-logica
  const needleState = useRef({
    baseRotation: -Math.PI + startOffset, // De vaste basisrotatie van de naald
    targetRotation: -Math.PI + startOffset, // Het doel waar de naald naartoe wil draaien
    timer: 1, // Tikt elke seconde
    isBouncing: false,
    bounceDelay: 0
  });

  useFrame((state, delta) => {
    // Zweef-animatie
    if (klokRef.current) {
      klokRef.current.position.y =  Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }

    if (isOverlayOpen) return;

    if (needleRef.current) {
      needleState.current.timer -= delta;

      // De spronggrootte: PLUS in plaats van MIN voor clockwise rotatie
      const tickAmount = (Math.PI * 2) / 60;

      // STAP 1: De naald probeert vooruit te tikken
      if (needleState.current.timer <= 0) {
        // Zet het doel één seconde vooruit
        needleState.current.targetRotation = needleState.current.baseRotation + tickAmount;
        
        needleState.current.timer = 1; // Probeer het over exact 1 seconde opnieuw
        
        // Activeer de terugslag
        needleState.current.isBouncing = true;
        // Het mechanisme houdt het ~0.1 seconde vol voordat het faalt
        needleState.current.bounceDelay = 0.08 + Math.random() * 0.05; 
      }

      // STAP 2: Het mechanisme weigert en slaat terug
      if (needleState.current.isBouncing) {
        needleState.current.bounceDelay -= delta;
        
        if (needleState.current.bounceDelay <= 0) {
          // Val meedogenloos terug naar de vaste basisrotatie
          needleState.current.targetRotation = needleState.current.baseRotation;
          needleState.current.isBouncing = false;
        }
      }

      // Vloeiende maar UITERST SNELLE rotatie (lerp-factor 35) voor een harde mechanische tik
      needleRef.current.rotation.z = THREE.MathUtils.lerp(
        needleRef.current.rotation.z,
        needleState.current.targetRotation,
        delta * 35 
      );
    }
  })

  const handlePointerOver = () => {
    if (!enteredUitdagingenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const klokData = {
      titel: "2. Administratieve discipline",
      dlr: "De leraar als organisator",
      praktijk: "Mijn absolute focus ligt bij de dynamiek in de klas, waardoor de administratieve 'papierwinkel' wel eens in het gedrang komt. Mijn stagebegeleider merkte kritisch op dat mijn stageplanningen en lesvoorbereidingen soms te laat of onvolledig werden ingediend. Het tijdig verbeteren van taken schuif ik nog te vaak voor me uit ten voordele van het lesontwerp zelf.",
      beleidLink: "De realiteit van de profileringsstage was een harde wake-up call. Vanuit SGR 5 kregen we de onbuigzame eis dat het raamwerk voor het ICT-beleid op 1 september geïmplementeerd moet zijn. Bij de directie zag ik dat uitstelgedrag ontwrichtend werkt. Als een protocol te laat is, loopt de werking van een hele school vast. Ik moest 'Notion', maar ook simpele afspraken, inzetten om niet alleen de werkgroep, maar vooral mezelf, in een strak keurslijf te dwingen.",
      groeiVisie: "Ik kan niet van een directie verwachten dat ze een school strak runnen, als ik mijn eigen administratie niet beheer. Ik blokkeer nu vaste uren in mijn weekplanning en gebruik digitale systemen om dit hardnekkige uitstelgedrag structureel te elimineren."
    };

  const handleClick = (e) => {
    if (!enteredUitdagingenPlain) return;
    e.stopPropagation(); 
    setOverlayData(klokData);
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

      <group dispose={null} ref={klokRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Material}
          position={[-0.001, 1.059, -0.002]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.002']}
          position={[-0.001, 1.059, -0.002]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials['Material.001']}
          position={[0.172, 1.345, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005.geometry}
          material={materials['Material.001']}
          position={[0.315, 1.218, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={materials['Material.001']}
          position={[0.381, 1.016, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text007.geometry}
          material={materials['Material.001']}
          position={[0.313, 0.819, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text008.geometry}
          material={materials['Material.001']}
          position={[0.174, 0.673, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text009.geometry}
          material={materials['Material.001']}
          position={[-0.036, 0.621, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text010.geometry}
          material={materials['Material.001']}
          position={[-0.238, 0.674, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text011.geometry}
          material={materials['Material.001']}
          position={[-0.372, 0.814, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text012.geometry}
          material={materials['Material.001']}
          position={[-0.43, 1.007, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text013.geometry}
          material={materials['Material.001']}
          position={[-0.404, 1.206, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text014.geometry}
          material={materials['Material.001']}
          position={[-0.248, 1.366, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text015.geometry}
          material={materials['Material.001']}
          position={[-0.07, 1.4, 0.074]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.473}
        />
        
        <mesh
          ref={needleRef} 
          castShadow
          receiveShadow
          geometry={nodes.Cone001.geometry}
          material={materials['Material.002']}
          position={[-0.001, 1.059, 0.089]}
          rotation={[-Math.PI , 0, -Math.PI ]}
          scale={0.473}
        />
    </group>
  </group> 
  )
}

useGLTF.preload('/models/Klok.glb')