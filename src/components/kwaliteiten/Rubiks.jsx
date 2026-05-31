import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useShallow } from 'zustand/react/shallow'
import useStore from "../../store/useScene";

export function Rubiks(props) {
  const { nodes, materials } = useGLTF('/models/Rubiks.glb')
  
  const rubiksRef = useRef()
  
  const part1Ref = useRef()
  const part2Ref = useRef()
  const part3Ref = useRef()

  const enteredKwaliteitenPlain = useStore(useShallow((state) => state.enteredKwaliteitenPlain))
  const isOverlayOpen = useStore(useShallow((state) => state.isOverlayOpen));
  const setOverlayData = useStore(useShallow((state) => state.setOverlayData));

  const animState = useRef({
    partIndex: 0,               
    targetRotations: [0, 0, 0], 
    isMoving: false,            
    pauseTimer: 1               
  });

  useFrame((state, delta) => {
    if (isOverlayOpen) return;

    const parts = [part1Ref, part2Ref, part3Ref];
    if (!parts[0].current || !parts[1].current || !parts[2].current) return;

    const anim = animState.current;

    if (!anim.isMoving) {
      anim.pauseTimer -= delta;

      if (anim.pauseTimer <= 0) {
        anim.partIndex = (anim.partIndex + 1) % 3;

        const turns = Math.floor(Math.random() * 3) + 1;
        const angle = turns * (Math.PI / 2);

        anim.targetRotations[anim.partIndex] += angle;
        anim.isMoving = true;
      }
    } else {
      const activePart = parts[anim.partIndex];
      const target = anim.targetRotations[anim.partIndex];

      // AANGEPAST: Lerp nu specifiek de Z-as (derde waarde in rotatie array)
      activePart.current.rotation.z = THREE.MathUtils.lerp(
        activePart.current.rotation.z, 
        target, 
        delta * 6 
      );

      // AANGEPAST: Controleer de marge op de Z-as
      if (Math.abs(activePart.current.rotation.z - target) < 0.01) {
        activePart.current.rotation.z = target;
        anim.isMoving = false;
        anim.pauseTimer = 0.5; 
      }
    }
  });

  const handlePointerOver = () => {
    if (!enteredKwaliteitenPlain) return
    document.body.style.cursor = 'pointer'
  } 
  const handlePointerOut = () => (document.body.style.cursor = 'auto')

  const rubiksData = {
      titel: "3. Een innovatieve, frisse blik op onderwijs",
      dlr: "Innovator/Onderzoeker & De gepassioneerde leraar (OLR)",
      praktijk: "Ik weiger theorie in een vacuüm te geven. Ik start lessen vanuit actuele situaties die direct aansluiten bij de jongeren. Collega's, maar vooral de leerlingen, waarderen mijn moderne, leefwereldgerichte aanpak. We experimenteren continu met manieren om onze didactiek te wapenen tegen de opmars van AI. Zo vervangen we standaard boekbesprekingen (die een chatbot in 2 seconden genereert) door opdrachten rond minder bekende boeken met zeer specifieke detailvragen. We forceren leerlingen op een positieve manier om de theorie écht tot zich te nemen.",
      beleidLink: "Een absoluut hoogtepunt van mijn profileringsstage was het pitchen van ons didactisch ICT-beleid aan een internationale delegatie van de OECD, de Europese Commissie en Kenniscentrum DigiSprong. Ik had al het werk van mezelf en een collega fysiek afgedrukt om de 'classroom reality' tastbaar te maken voor deze experten. Aan de hand van de 'pencil metaphor' illustreerde ik hoe technologie op BA Pitzemburg ook kwetsbaar is voor mensen die te snel op technologie vliegen en collega's die koppig bij het vetrouwde blijven. Ten slotte deelde ik onze plannen en aanpak rond AI-beleid en evaluatieaanpassingen.",
      groeiVisie: "De mogelijkheid om onze visie op zo'n hoog niveau te delen, en de positieve respons van de delegatie, versterkt mijn drive enorm. Ik zal vastgeroeste processen blijvend in vraag stellen en blijf experimenteren met nieuwe didactische invalshoeken om het onderwijs actueel en fraude-proof te houden."
  };

  const handleClick = (e) => {
    if (!enteredKwaliteitenPlain) return;
    e.stopPropagation(); 
    setOverlayData(rubiksData);
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
      
      <group ref={rubiksRef} scale={0.5} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
        
        {/* DEEL 1 - Let op: Vaste basis rotatie zit op de buitenste groep */}
        <group rotation={[0, 0, 0]}>
          <group ref={part1Ref}>
            <mesh castShadow receiveShadow geometry={nodes.Cube017.geometry} material={materials['Material.004']}>
              <mesh castShadow receiveShadow geometry={nodes.Cube014.geometry} material={materials['Material.002']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube015.geometry} material={materials['Material.001']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube016.geometry} material={materials['Material.003']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube018.geometry} material={materials['Material.006']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube019.geometry} material={materials['Material.007']} />
            </mesh>
          </group>
        </group>
        
        {/* DEEL 2 */}
        <group rotation={[0, 0, 0]}>
          <group ref={part2Ref}>
            <mesh castShadow receiveShadow geometry={nodes.Cube020.geometry} material={materials['Material.002']}>
              <mesh castShadow receiveShadow geometry={nodes.Cube021.geometry} material={materials['Material.001']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube022.geometry} material={materials['Material.003']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube023.geometry} material={materials['Material.006']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube024.geometry} material={materials['Material.007']} />
            </mesh>
          </group>
        </group>
        
        {/* DEEL 3 */}
        <group rotation={[0, 0, 0]}>
          <group ref={part3Ref}>
            <mesh castShadow receiveShadow geometry={nodes.Cube007.geometry} material={materials['Material.002']}>
              <mesh castShadow receiveShadow geometry={nodes.Cube008.geometry} material={materials['Material.001']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube009.geometry} material={materials['Material.003']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube011.geometry} material={materials['Material.005']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube012.geometry} material={materials['Material.006']} />
              <mesh castShadow receiveShadow geometry={nodes.Cube013.geometry} material={materials['Material.007']} />
            </mesh>
          </group>
        </group>

      </group>
    </group>
  )
}

useGLTF.preload('/models/Rubiks.glb')