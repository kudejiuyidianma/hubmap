import React, { useRef, useState, } from "react";
import './App.css';
import Preview from "./Preview";
import Profile from "./Profile"
export default function App(props) {
  const [cube_x, setCube_x] = useState(10)
  const [cube_y, setCube_y] = useState(10)
  const [cube_z, setCube_z] = useState(10)
  const [cube_rx, setCube_rx] = useState(0)
  const [cube_ry, setCube_ry] = useState(0)
  const [cube_rz, setCube_rz] = useState(0)
  const [cube_dx, setCube_dx] = useState(0)
  const [cube_dy, setCube_dy] = useState(0)
  const [cube_dz, setCube_dz] = useState(0)

  // change page
  const [showPreview, setShowPreview] = useState(true)

  function handlesubmit(e){
    e.preventDefault();
    setCube_x(10)
    setCube_y(10)
    setCube_z(10)
    setCube_rx(0)
    setCube_ry(0)
    setCube_rz(0)
    setCube_dx(0)
    setCube_dy(0)
    setCube_dz(0)
    window.location.reload(false)
  }
  
  
  

  return (
    <div className='page'>
      <div className='canvas'>
        {showPreview ? 
        <Preview 
        cube_x = {cube_x}
        cube_y= {cube_y}
        cube_z = {cube_z}
        cube_rx = {cube_rx}
        cube_ry = {cube_ry}
        cube_rz = {cube_rz}
        cube_dx = {cube_dx}
        cube_dy = {cube_dy}
        cube_dz = {cube_dz}
        />  : 
        <div className="profile">
          <Profile 
            cube_x = {cube_x}
            cube_y= {cube_y}
            cube_z = {cube_z}
            cube_rx = {cube_rx}
            cube_ry = {cube_ry}
            cube_rz = {cube_rz}
            setCube_dx = {setCube_dx}
            setCube_dy = {setCube_dy}
            setCube_dz = {setCube_dz}
          />
          
        </div>
        }
        
        
      </div>
      <div className='conditions'>
        <div className="btn-container">
          <span className="btn" onClick={() => setShowPreview(!showPreview)}>Profile</span>
          {/* <span className="btn" onClick={() => setShowPreview(!showPreview)}>Preview</span> */}
        </div>
        
        <div className='magnititude'>
            <h3>Tissue Block Dimensions(mm)</h3>
            <button className='reset_tissue' onClick={handlesubmit}>Reset Tissue</button>
            <div className="mag_table">
              <div className="subtitle">Tissue Width</div>
              <div className="subtitle">Tissue Height</div>
              <div className="subtitle">Tissue Depth</div>
              <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                type = "text" onChange={(event) => setCube_x(event.target.value)} placeholder={cube_x}></textarea>
          
              <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                    type = "text" onChange={(event) => setCube_y(event.target.value)} placeholder={cube_y}></textarea>
              
              <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                    type = "text" onChange={(event) => setCube_z(event.target.value)} placeholder={cube_z}></textarea>
            </div>
          
          
          
        </div>
        <div className='direction'>
          <h3>Tissue Block Rotation</h3>
          <div className="dir_table">
            <div className="subtitle">Tissue X</div>
            <div className="subtitle">Tissue Y</div>
            <div className="subtitle">Tissue Z</div>
          
          
              <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                type = "text" onChange={(event) => setCube_rx(event.target.value)} placeholder={cube_rx}></textarea>
          
              <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                    type = "text" onChange={(event) => setCube_ry(event.target.value)} placeholder={cube_ry}></textarea>
              
              <textarea rows="1" cols="15" name="text" style={{resize: 'none'}}
                    type = "text" onChange={(event) => setCube_rz(event.target.value)} placeholder={cube_rz}></textarea>
            
          </div>
          
            
        </div>
        <h3>Tissue Block displacement</h3>
        <div className="displacement">
          <div>{'x = ' + cube_dx}</div>
          <div>{'y = ' + cube_dy}</div>
          <div>{'z = ' + cube_dz}</div>
        </div>
        <h3>Tissue Block Report</h3>

      </div>
     </div>
    
  )
}
