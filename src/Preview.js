import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import Model from './Model'
import Tissue from './Tissue';


export default function Preview(props) {
  
  var width = '800px'
  var height = '600px'

  const Scene = () => {
    useThree(({camera, scene}) => {
      var target = scene.position.clone()
      var camPos = camera.position.clone()
      let depth = camPos.sub(target).length()

      var fov = 60
      var aspect = 800/600

      
      var top_ort = Math.atan(fov/2)*7
      var rig_ort = top_ort*aspect
      var bot_ort = - top_ort
      var lef_ort = - rig_ort

      props.setTopOrt(top_ort)
      props.setRigOrt(rig_ort)
      props.setBotOrt(bot_ort)
      props.setLefOrt(lef_ort)

    })

  }

  return (
    <div>
      <div id="canvas-container">
        
            <Canvas style={{height:height, width:width}}
            camera = {{fov:60, aspect:width/height, near:1, far:1000, position:[0,0,7]}}>
          <ambientLight/>
          <pointLight position={[10,1,10]} />
          <Scene />
          <OrbitControls />
            <Tissue position = {[props.cube_dx,props.cube_dy,props.cube_dz]}
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
