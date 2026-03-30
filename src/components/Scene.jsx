import React from "react";

export default function Scene() {
  return (
    <>
      {/* standard cube */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>

    </>
  );
}