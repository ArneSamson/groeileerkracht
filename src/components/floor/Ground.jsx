import React from "react";
import { RigidBody } from "@react-three/rapier";
import { Instances, Instance } from "@react-three/drei";
import WavyCable from "./Cable";

export default function Ground() {
  const gridSize = 70; 
  const spacing = 4; 

  const positions = [...Array(gridSize * gridSize)].map((_, i) => {
    const col = i % gridSize;
    const row = Math.floor(i / gridSize);
    return {
      x: (col - gridSize / 2) * spacing,
      z: (row - gridSize / 2) * spacing
    };
  });

  return (
    <>
      <WavyCable 
          start={[-3.3, 0, -10.05]} 
          end={[-23, 0, -21]} 
          color="#000"
          amplitude={1.5}
          frequency={-0.9}
          radius={0.3}
      />
      <WavyCable 
          start={[4.8, 0, -8.75]} 
          end={[23, 0, -21]} 
          color="#000"
          amplitude={1.5}
          frequency={1.75}
          radius={0.3}
      />

      <RigidBody type="fixed" colliders="cuboid">
        <mesh 
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow={true}
        >
          <planeGeometry args={[100, 100]} />
          <meshToonMaterial color={'#fff'}/>
        </mesh>
      </RigidBody>

      <Instances limit={gridSize * gridSize}>
        <planeGeometry args={[0.2, 1]} />
        <meshToonMaterial color="#88837f" />
        
        {positions.map((pos, i) => (
          <Instance 
            key={`vert-${i}`} 
            position={[pos.x, 0.01, pos.z]} 
            rotation={[-Math.PI / 2, 0, 0]} 
          />
        ))}
      </Instances>

      <Instances limit={gridSize * gridSize}>
        <planeGeometry args={[1, 0.2]} />
        <meshToonMaterial color="#88837f" />
        
        {positions.map((pos, i) => (
          <Instance 
            key={`horiz-${i}`} 
            position={[pos.x, 0.01, pos.z]} 
            rotation={[-Math.PI / 2, 0, 0]} 
          />
        ))}
      </Instances>
    </>
  );
}