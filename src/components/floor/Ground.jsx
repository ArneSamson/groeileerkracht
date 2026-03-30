import React from "react";

export default function Ground() {
  // Instellingen voor het raster (grid)
  const gridSize = 30; 
  const spacing = 4; 

  return (
    <>
      {/* De vloer */}
      <mesh 
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow={true}
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={'#fdfdfc'} />
      </mesh>

      {/* Loop over 100 items om het grid te genereren */}
      {[...Array(gridSize * gridSize)].map((_, i) => {
        // Bereken wiskundig de rijen (z) en kolommen (x) op basis van de index (i).
        // Door de helft van de gridSize af te trekken, centreren we het grid rond het nulpunt [0,0,0].
        const col = i % gridSize;
        const row = Math.floor(i / gridSize);
        
        const xPos = (col - gridSize / 2) * spacing;
        const zPos = (row - gridSize / 2) * spacing;

        return (
          // Een group houdt de twee lijnen van het plusteken netjes samen op één positie
          <group key={i} position={[xPos, 0.01, zPos]}>
            
            {/* Verticale lijn van het plusteken */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.2, 1]} />
              <meshStandardMaterial color="#000002" />
            </mesh>

            {/* Horizontale lijn van het plusteken (let op de omgedraaide args) */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[1, 0.2]} />
              <meshStandardMaterial color="#000002" />
            </mesh>
            
          </group>
        );
      })}
    </>
  );
}