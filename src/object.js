import React, { useRef, useState, } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import Model from './Model'
import Loader from './Loader';
import Tissue from './Tissue';

export default function Object(props) {

   return (
      <div>
         <Tissue 
            cube_x={this.props.cube_x}
            cube_y={this.props.cube_y}
            cube_z={this.props.cube_z}
            
          />
          <Model />
      </div>
   );
};