import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useFrame } from "react";
import { OrbitControls} from "@react-three/drei";
import Tissue from './Tissue';
import Dragable from './Dragable'
import Model from './Model'
import * as THREE from "three"

export default function Profile(props) {
    const cub_pos = new THREE.Vector3(1.5,0,0)
    const m_pos = new THREE.Vector3(-1.5,4.6,2)
    var width = '800px'
    var height = '600px'
    // // window aspect ratio
    // var k = width/height
    // //3D scene display range control coefficient, the larger the coefficient, the larger the display range.
    // var s = 150
  
    return(
  <div>
      <div id="canvas-container">
        
            <Canvas style={{height:height, width:width}}
            orthographic
            camera={{left:props.lef_ort, right: props.rig_ort, top: props.top_ort, bottom: props.bot_ort, near: 1, far: 1000, position:[0,0,7], scale:0.012}}
            >
          <ambientLight/>
          <pointLight position={[10,1,10]} />
          <Dragable>
            <Tissue  position = {[props.cube_dx,props.cube_dy,props.cube_dz]} 
            
            cube_x={props.cube_x}
            cube_y={props.cube_y}
            cube_z={props.cube_z}
            cube_rx = {props.cube_rx}
            cube_ry = {props.cube_ry}
            cube_rz = {props.cube_rz}
            setCube_dx = {props.setCube_dx}
            setCube_dy = {props.setCube_dy}
            setCube_dz = {props.setCube_dz}
           />
           </Dragable>
           {/* left and right ,up and down, near and far */}
           <Model position = {[-1.5,-4.6,2]} scale = {2}/>
          
          
        </Canvas>
       </div>
      
    </div>
    )
}

