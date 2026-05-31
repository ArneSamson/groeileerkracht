import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/shallow'
import useStore from "../../store/useScene";

export function Borden(props) {
  const { nodes, materials } = useGLTF('/models/Borden.glb')
  
  const bordenRef = useRef()

  const enteredUitdagingenPlain = useStore(useShallow((state) => state.enteredUitdagingenPlain));
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  const handlePointerOver = () => {
    if (!enteredUitdagingenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const bordenData = {
      titel: "5. Differentiëren vanaf de opstart",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "De instroom in mijn lessen informatica is bijzonder heterogeen. De verschillen in tempo en voorkennis zijn enorm. Mijn differentiatie-aanpak was lange tijd te reactief: ik voorzag pas een verdiepingsopdracht aan het einde van de les. Dit resulteerde in demotivatie bij snelle werkers die moesten wachten, en stress bij leerlingen die meer verwerkingstijd nodig hadden.",
      beleidLink: "Bij de analysefase van het ICT-beleid werd ik geconfronteerd met de gigantische spreiding in digitale geletterdheid onder het docentencorps zelf. Een beleid dat verwachtingen stelt, moet op maat en gedifferentieerd worden aangeboden, anders verlies je het draagvlak. Een 'one size fits all' benadering voor ICT-opleidingen werkte simpelweg niet voor het personeel.",
      groeiVisie: "Dat inzicht heeft mijn lesontwerp fundamenteel gewijzigd. Ik weiger nog reactief te differentiëren. Ik dwing mezelf om vanaf de allereerste minuut van de instructie een basis- én verdiepingsoptie glashelder aan te bieden (conform de UDL-principes), zodat elke leerling onmiddellijk op eigen niveau wordt uitgedaagd."
    };

  const handleClick = (e) => {
    if (!enteredUitdagingenPlain) return;
    e.stopPropagation(); 
    setOverlayData(bordenData);
  }

  return (
    <group {...props} dispose={null} onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
        <ringGeometry args={[1.4, 1.8, 32]} />
        <meshToonMaterial color="#000"/>
      </mesh>
      
      <RigidBody type="fixed">
        <mesh position={[0, -0.2, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 1, 8]} />
            <meshToonMaterial transparent={true} opacity={0} />
        </mesh>
      </RigidBody>

    <group dispose={null} ref={bordenRef} position={[0, -0.3, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.Material}
        rotation={[-0.083, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Material.003']}
        rotation={[-0.083, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text016.geometry}
        material={materials.Material}
        rotation={[-0.083, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.Material}
        position={[-1.164, 0.443, 0.326]}
        rotation={[0.185, 0.253, -0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.007']}
        position={[-1.164, 0.443, 0.326]}
        rotation={[0.185, 0.253, -0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Material}
        position={[-1.164, 0.443, 0.326]}
        rotation={[0.185, 0.253, -0.313]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.Material}
        position={[-2.995, -0.924, 0]}
        rotation={[0.147, 0.07, 0.307]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials['Material.007']}
        position={[-2.995, -0.924, 0]}
        rotation={[0.147, 0.07, 0.307]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.Material}
        position={[-2.995, -0.924, 0]}
        rotation={[0.147, 0.07, 0.307]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.Material}
        rotation={[-0.281, -0.072, -0.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials['Material.007']}
        rotation={[-0.281, -0.072, -0.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.Material}
        rotation={[-0.281, -0.072, -0.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.Material}
        rotation={[-0.176, -0.346, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials['Material.007']}
        rotation={[-0.176, -0.346, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.Material}
        rotation={[-0.176, -0.346, 0.065]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={materials['Material.011']}
        position={[0, -0.274, 0]}
      />
    </group>
  </group> 
  )
}

useGLTF.preload('/models/Borden.glb')