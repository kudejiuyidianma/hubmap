import React, { useRef, useState, } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import Model from "./Model";


export default function Tissue(props) {
   const mesh = useRef();
   const x = convert(props.cube_rx)
   const y = convert(props.cube_ry)
   const z = convert(props.cube_rz)
   useFrame(() => (mesh.current.rotation.x = x, mesh.current.rotation.y = y,mesh.current.rotation.z = z));
   
   return (
      <mesh {...props} ref={mesh} scale={0.03}>
         <boxGeometry args={[props.cube_x, props.cube_y, props.cube_z]} />
         <meshStandardMaterial color={"orange"} />
         
         
      </mesh>
   );
};

function convert(data){
      if(data*1.0 > 180){
         return data*1.0/180*Math.PI
      }
      else if (data*1 < -180){
         return data*1.0/180*Math.PI
      }
      return data*1.0/180*Math.PI
   }