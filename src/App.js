
import './App.css';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import React, { useRef, useState, } from "react";
import Model from './Model'
import Loader from './Loader';
import Tissue from './Tissue';
import Dragable from './Dragable';


export default function App() {
  const [cube_x, setCube_x] = useState(10)
  const [cube_y, setCube_y] = useState(10)
  const [cube_z, setCube_z] = useState(10)

  function handlesubmit(e){
    e.preventDefault();
    setCube_x(10)
    setCube_y(10)
    setCube_z(10)
    window.location.reload(false)
  }

  return (
    <div>
      <div id="canvas-container">
        <Canvas style={{height:'600px', width:'800px'}} >
          <ambientLight intensity={0.3} />
          
          <Tissue 
            cube_x={cube_x}
            cube_y={cube_y}
            cube_z={cube_z}
            
          />
          
          <OrbitControls />
          {/* <Stage preset="rembrandt" intensity={1} environment="sunset">
            <Model/>
            <OrbitControls />
          </Stage> */}
        </Canvas>
       <div id='cube_condition'>
        <div id='cube_size'>
          <p id='tbd'>Tissue Block Dimensions(mm)</p>
          <button id='reset_tissue' onClick={handlesubmit}>Reset Tissue</button>
          <p>Tissue Width</p>
          <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                type = "text" onChange={(event) => setCube_x(event.target.value)} placeholder={cube_x}></textarea>
          <p>Tissue Height</p>
          <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                type = "text" onChange={(event) => setCube_y(event.target.value)} placeholder={cube_y}></textarea>
          <p>Tissue Depth</p>
          <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                type = "text" onChange={(event) => setCube_z(event.target.value)} placeholder={cube_z}></textarea>
          
        </div>

      </div> 
      </div>
      
    </div>
    
  )
}
