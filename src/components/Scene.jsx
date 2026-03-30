import React from "react";
import Ground from "./floor/Ground";

export default function Scene() {
  return (
    <>
      {/* standard cube */}
        <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
        <Ground />

    </>
  );
}