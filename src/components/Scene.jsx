import React from "react";
import Ground from "./floor/Ground";
import Walls from "./floor/Walls";
import Player from "./Player";
import { CenterConsole } from "./center/CenterConsole";

export default function Scene() {

  const fogColor = "#fdfdfc";
  return (
    <>
        <color attach="background" args={[fogColor]} />
        <fog attach="fog" args={[fogColor, 15, 100]} />
        <Ground />
        <Walls />
        <CenterConsole position={[0, 0, 0]} />
        <Player />
    </>
  );
}