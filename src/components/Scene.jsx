import React from "react";
import Ground from "./floor/Ground";
import Walls from "./floor/Walls";
import Player from "./Player";

export default function Scene() {

  const fogColor = "#fdfdfc";
  return (
    <>
        <color attach="background" args={[fogColor]} />
        <fog attach="fog" args={[fogColor, 15, 100]} />
        <Ground />
        <Walls />
        <Player />
    </>
  );
}