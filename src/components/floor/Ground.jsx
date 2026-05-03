import React from "react";
import { ShadowMaterial } from "three";
import { RigidBody } from "@react-three/rapier";

export default function Ground() {
  const gridSize = 75; 
  const spacing = 4; 

  return (
    <>
    <RigidBody type="fixed" colliders="cuboid">
      <mesh 
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow={true}
      >
        <planeGeometry args={[400, 400]} />
        <meshToonMaterial color={'#fff'}/>
        
      </mesh>
    </RigidBody>

      {[...Array(gridSize * gridSize)].map((_, i) => {
        const col = i % gridSize;
        const row = Math.floor(i / gridSize);
        
        const xPos = (col - gridSize / 2) * spacing;
        const zPos = (row - gridSize / 2) * spacing;

        return (
          <group key={i} position={[xPos, 0.01, zPos]}>
            
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.2, 1]} />
              <meshToonMaterial color="#000002" />
            </mesh>

            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1, 0.2]} />
              <meshToonMaterial color="#000002" />
            </mesh>
            
          </group>
        );
      })}
    </>
  );
}