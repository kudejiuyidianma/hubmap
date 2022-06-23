import React, { useRef, useState, } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";

export default function Tissue(props) {
   return (
      <mesh scale={0.07}>
         <boxGeometry args={[props.cube_x, props.cube_y, props.cube_z]} />
         <meshStandardMaterial color={"orange"} />
      </mesh>
   );
};
