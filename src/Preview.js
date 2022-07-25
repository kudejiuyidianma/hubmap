import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Model from './Model'
import Tissue from './Tissue';


export default function Preview(props) {
  
  return (
    <div>
      <div id="canvas-container">
        
            <Canvas style={{height:'600px', width:'800px'}}>
          <ambientLight/>
          <pointLight position={[10,1,10]} />
          {/* <OrbitControls /> */}
            <Tissue position = {[1.5,0,0]}
            cube_x={props.cube_x}
            cube_y={props.cube_y}
            cube_z={props.cube_z}
            cube_rx = {props.cube_rx}
            cube_ry = {props.cube_ry}
            cube_rz = {props.cube_rz}
           />
           {/* left and right ,up and down, near and far */}
           <Model position = {[-1.5,-4.6,2]} scale = {2}/>
          
          
          
        </Canvas>
       </div>
      
    </div>
    
  )
}
