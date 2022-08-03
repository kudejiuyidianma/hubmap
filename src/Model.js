import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import React, { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"



export default function Model(props) {
  const group = useRef();
  const { scene, nodes, materials } = useGLTF("/VH_F_Kidney_L.glb");
  const box = useMemo(() => new THREE.Box3().setFromObject(scene), [scene])

  const x = (box.min.x*props.scale+props.position[0]).toFixed(2)
  const y = (box.min.y*props.scale+props.position[1]).toFixed(2)
  const z = (box.min.z*props.scale+props.position[2]).toFixed(2)

  const lb = new THREE.Vector3(x,y,z)
  props.setLb(lb)


    for (const key in nodes) {
    var m = nodes[key].material
    for (const k in m) {
      if (k == 'transparent'){
        m[k] = true
      }
      if (k == 'opacity'){
        m[k] = 0.5
      }
    }
  }

  

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_a.geometry}
        material={nodes.VH_F_renal_papilla_L_a.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_b.geometry}
        material={nodes.VH_F_renal_papilla_L_b.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_c.geometry}
        material={nodes.VH_F_renal_papilla_L_c.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_d.geometry}
        material={nodes.VH_F_renal_papilla_L_d.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_e.geometry}
        material={nodes.VH_F_renal_papilla_L_e.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_f.geometry}
        material={nodes.VH_F_renal_papilla_L_f.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_g.geometry}
        material={nodes.VH_F_renal_papilla_L_g.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_h.geometry}
        material={nodes.VH_F_renal_papilla_L_h.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_i.geometry}
        material={nodes.VH_F_renal_papilla_L_i.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_j.geometry}
        material={nodes.VH_F_renal_papilla_L_j.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_k.geometry}
        material={nodes.VH_F_renal_papilla_L_k.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_a.geometry}
        material={nodes.VH_F_renal_pyramid_L_a.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_b.geometry}
        material={nodes.VH_F_renal_pyramid_L_b.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_c.geometry}
        material={nodes.VH_F_renal_pyramid_L_c.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_d.geometry}
        material={nodes.VH_F_renal_pyramid_L_d.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_e.geometry}
        material={nodes.VH_F_renal_pyramid_L_e.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_f.geometry}
        material={nodes.VH_F_renal_pyramid_L_f.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_g.geometry}
        material={nodes.VH_F_renal_pyramid_L_g.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_h.geometry}
        material={nodes.VH_F_renal_pyramid_L_h.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_i.geometry}
        material={nodes.VH_F_renal_pyramid_L_i.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_j.geometry}
        material={nodes.VH_F_renal_pyramid_L_j.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_k.geometry}
        material={nodes.VH_F_renal_pyramid_L_k.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_column_L.geometry}
        material={nodes.VH_F_renal_column_L.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_outer_cortex_of_kidney_L.geometry}
        material={nodes.VH_F_outer_cortex_of_kidney_L.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_a.geometry}
        material={nodes.VH_F_minor_calyx_L_a.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_b.geometry}
        material={nodes.VH_F_minor_calyx_L_b.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_c.geometry}
        material={nodes.VH_F_minor_calyx_L_c.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_d.geometry}
        material={nodes.VH_F_minor_calyx_L_d.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_e.geometry}
        material={nodes.VH_F_minor_calyx_L_e.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_f.geometry}
        material={nodes.VH_F_minor_calyx_L_f.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_g.geometry}
        material={nodes.VH_F_minor_calyx_L_g.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_h.geometry}
        material={nodes.VH_F_minor_calyx_L_h.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_i.geometry}
        material={nodes.VH_F_minor_calyx_L_i.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_j.geometry}
        material={nodes.VH_F_minor_calyx_L_j.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_a.geometry}
        material={nodes.VH_F_major_calyx_L_a.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_b.geometry}
        material={nodes.VH_F_major_calyx_L_b.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_c.geometry}
        material={nodes.VH_F_major_calyx_L_c.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_d.geometry}
        material={nodes.VH_F_major_calyx_L_d.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_kidney_capsule_L.geometry}
        material={nodes.VH_F_kidney_capsule_L.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_hilum_of_kidney_L.geometry}
        material={nodes.VH_F_hilum_of_kidney_L.material}
      />
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pelvis_L.geometry}
        material={nodes.VH_F_renal_pelvis_L.material}
      />
    </group>
  );
}

useGLTF.preload("/VH_F_Kidney_L.glb");
