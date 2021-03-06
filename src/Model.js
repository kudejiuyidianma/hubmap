import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/VH_F_Kidney_L.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_a.geometry}
        material={nodes.VH_F_renal_papilla_L_a.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_b.geometry}
        material={nodes.VH_F_renal_papilla_L_b.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_c.geometry}
        material={nodes.VH_F_renal_papilla_L_c.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_d.geometry}
        material={nodes.VH_F_renal_papilla_L_d.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_e.geometry}
        material={nodes.VH_F_renal_papilla_L_e.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_f.geometry}
        material={nodes.VH_F_renal_papilla_L_f.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_g.geometry}
        material={nodes.VH_F_renal_papilla_L_g.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_h.geometry}
        material={nodes.VH_F_renal_papilla_L_h.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_i.geometry}
        material={nodes.VH_F_renal_papilla_L_i.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_j.geometry}
        material={nodes.VH_F_renal_papilla_L_j.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_papilla_L_k.geometry}
        material={nodes.VH_F_renal_papilla_L_k.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_a.geometry}
        material={nodes.VH_F_renal_pyramid_L_a.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_b.geometry}
        material={nodes.VH_F_renal_pyramid_L_b.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_c.geometry}
        material={nodes.VH_F_renal_pyramid_L_c.material}
      />
      <mesh scale={10}
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
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_f.geometry}
        material={nodes.VH_F_renal_pyramid_L_f.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_g.geometry}
        material={nodes.VH_F_renal_pyramid_L_g.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_h.geometry}
        material={nodes.VH_F_renal_pyramid_L_h.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_i.geometry}
        material={nodes.VH_F_renal_pyramid_L_i.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_j.geometry}
        material={nodes.VH_F_renal_pyramid_L_j.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pyramid_L_k.geometry}
        material={nodes.VH_F_renal_pyramid_L_k.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_column_L.geometry}
        material={nodes.VH_F_renal_column_L.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_outer_cortex_of_kidney_L.geometry}
        material={nodes.VH_F_outer_cortex_of_kidney_L.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_a.geometry}
        material={nodes.VH_F_minor_calyx_L_a.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_b.geometry}
        material={nodes.VH_F_minor_calyx_L_b.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_c.geometry}
        material={nodes.VH_F_minor_calyx_L_c.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_d.geometry}
        material={nodes.VH_F_minor_calyx_L_d.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_e.geometry}
        material={nodes.VH_F_minor_calyx_L_e.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_f.geometry}
        material={nodes.VH_F_minor_calyx_L_f.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_g.geometry}
        material={nodes.VH_F_minor_calyx_L_g.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_h.geometry}
        material={nodes.VH_F_minor_calyx_L_h.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_i.geometry}
        material={nodes.VH_F_minor_calyx_L_i.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_minor_calyx_L_j.geometry}
        material={nodes.VH_F_minor_calyx_L_j.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_a.geometry}
        material={nodes.VH_F_major_calyx_L_a.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_b.geometry}
        material={nodes.VH_F_major_calyx_L_b.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_c.geometry}
        material={nodes.VH_F_major_calyx_L_c.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_major_calyx_L_d.geometry}
        material={nodes.VH_F_major_calyx_L_d.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_kidney_capsule_L.geometry}
        material={nodes.VH_F_kidney_capsule_L.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_hilum_of_kidney_L.geometry}
        material={nodes.VH_F_hilum_of_kidney_L.material}
      />
      <mesh scale={10}
        castShadow
        receiveShadow
        geometry={nodes.VH_F_renal_pelvis_L.geometry}
        material={nodes.VH_F_renal_pelvis_L.material}
      />
    </group>
  );
}

useGLTF.preload("/VH_F_Kidney_L.glb");
