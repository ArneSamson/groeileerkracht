import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Drone(props) {
  const { nodes, materials } = useGLTF('/models/Drone.glb')
  
  const droneRef = useRef()
  // 1. Extra referenties voor de vier propellers
  const prop1Ref = useRef()
  const prop2Ref = useRef()
  const prop3Ref = useRef()
  const prop4Ref = useRef()

  const enteredUitdagingenPlain = useStore(useShallow((state) => state.enteredUitdagingenPlain));
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  // 2. De animatie-loop voor de drone en propellers
  useFrame((state, delta) => {
    if (isOverlayOpen) return;

    // Propellers razendsnel laten draaien rond hun Y-as
    const spinSpeed = delta * 25; // Verhoog of verlaag voor de draaisnelheid
    if (prop1Ref.current) prop1Ref.current.rotation.y += spinSpeed;
    if (prop2Ref.current) prop2Ref.current.rotation.y -= spinSpeed; // Tegenovergestelde richting voor realisme
    if (prop3Ref.current) prop3Ref.current.rotation.y -= spinSpeed;
    if (prop4Ref.current) prop4Ref.current.rotation.y += spinSpeed;

    // Drone hoog in de lucht laten zweven en kantelen
    if (droneRef.current) {
      const t = state.clock.elapsedTime;
      
      // Dobberen: 1.5 is de basishoogte, sinusgolf zorgt voor de op-en-neer beweging
      droneRef.current.position.y = 1.5 + Math.sin(t * 2) * 0.15;
      
      // Subtiele tilt/wobble over de X en Z as.
      // We tellen er +0.05 bij op de X-as zodat hij standaard een klein beetje naar voren hangt.
      droneRef.current.rotation.x = 0.3 + Math.sin(t * 5) * 0.05;
      droneRef.current.rotation.z = 0.3+ Math.cos(t * 4) * 0.05;
    }
  });

  const handlePointerOver = () => {
    if (!enteredUitdagingenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const droneData = {
      titel: "4. Helikopterview en circulair werken",
      dlr: "De leraar als opvoeder & Organisator",
      praktijk: "Tijdens zeer actieve werkvormen, zoals de projecten binnen SDG+, heb ik de neiging om me volledig vast te bijten in de begeleiding van één specifiek groepje. Door dat enthousiasme blijf ik te lang stilstaan, waardoor ik het overkoepelende overzicht verlies. Het risico is dat ik daardoor vragen van andere leerlingen mis of storend gedrag in de periferie te laat opmerk.",
      beleidLink: "BA Pitzemburg is slechts één radertje van de acht campussen binnen het Busleyden Atheneum. Jeroen toonde me hoe cruciaal een strategische 'helikopterview' is. Elke lokale beslissing resoneert over de andere campussen heen. Je mag je als directie nooit verliezen in één lokaal detail, maar moet continu de macro-structuur bewaken.",
      groeiVisie: "Die macro-blik van de directie is exact wat ik op microniveau in mijn eigen lokaal moet trainen. Ik verplicht mezelf nu om een actieve, circulaire looproute aan te nemen, fysiek afstand te nemen en letterlijk uit te zoomen om het klasklimaat in zijn totaliteit te bewaken."
    };

  const handleClick = (e) => {
    if (!enteredUitdagingenPlain) return;
    e.stopPropagation(); 
    setOverlayData(droneData);
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

    <group dispose={null} ref={droneRef} scale={0.4} position={[0, -0.3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials['Material.001']}
      />
      
      {/* 3. Koppel de refs aan de vier propellers */}
      <mesh
        ref={prop1Ref}
        castShadow
        receiveShadow
        geometry={nodes.Cone005.geometry}
        material={materials['Material.002']}
        position={[-0.707, 0.391, -0.717]}
      />
      <mesh
        ref={prop2Ref}
        castShadow
        receiveShadow
        geometry={nodes.Cone002.geometry}
        material={materials['Material.002']}
        position={[0.72, 0.391, -0.707]}
      />
      <mesh
        ref={prop3Ref}
        castShadow
        receiveShadow
        geometry={nodes.Cone003.geometry}
        material={materials['Material.002']}
        position={[0.709, 0.391, 0.717]}
      />
      <mesh
        ref={prop4Ref}
        castShadow
        receiveShadow
        geometry={nodes.Cone004.geometry}
        material={materials['Material.002']}
        position={[-0.722, 0.391, 0.702]}
      />
    </group>
  </group> 
  )
}

useGLTF.preload('/models/Drone.glb')