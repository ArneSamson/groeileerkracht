import React from "react";
import { RigidBody } from "@react-three/rapier";
import { Instances, Instance } from "@react-three/drei";

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