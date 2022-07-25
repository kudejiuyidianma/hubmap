import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useFrame } from "react";
import { OrbitControls} from "@react-three/drei";
import Tissue from './Tissue';
import Dragable from './Dragable'
import Model from './Model'
import * as THREE from "three"

export default function Profile(props) {

   
    return(
  <div>
      <div id="canvas-container">
        
            <Canvas style={{height:'600px', width:'800px'}}
            orthographic
            camera={{scale:0.01}}
            >
          <ambientLight/>
          <pointLight position={[10,1,10]} />
          <Dragable>
            <Tissue position = {[1.5,0,0]}
            cube_x={props.cube_x}
            cube_y={props.cube_y}
            cube_z={props.cube_z}
            cube_rx = {props.cube_rx}
            cube_ry = {props.cube_ry}
            cube_rz = {props.cube_rz}
           />
           </Dragable>
           {/* left and right ,up and down, near and far */}
           <Model position = {[-1.5,-4.6,2]} scale = {2}/>
          
          
          
        </Canvas>
       </div>
      
    </div>
    )
}

