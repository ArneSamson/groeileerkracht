import React from "react";
import Ground from "./floor/Ground";
import Walls from "./floor/Walls";
import Test from "./Test";

export default function Scene() {

  const fogColor = "#fdfdfc";
  return (
    <>
        <color attach="background" args={[fogColor]} />
        <fog attach="fog" args={[fogColor, 15, 100]} />
        <Ground />
        <Walls />
        <Test />
    </>
  );
}