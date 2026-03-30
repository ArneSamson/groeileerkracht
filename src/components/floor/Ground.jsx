import React from "react";

export default function Ground() {
  return (
    <>
      {/* standard cube */}
        <mesh position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="lightgray" />
        </mesh>

    </>
  );
}