import React, { useEffect, useRef, useState } from "react";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend, useThree } from "@react-three/fiber";
extend({ DragControls });

const Dragable = (props) => {
  //DragControls在three.js文档中可见有三个参数在构造函数中
  //（object：Array，camera：Camera，domElement：HTMLDOMElement）,所以这里从useThree里面解构出来
  const { camera, gl, scene } = useThree();
  const [children, setChildren] = useState([]);
  const groupRef = useRef();
  const controlsRef = useRef();

  useEffect(() => {
    setChildren(groupRef.current.children);
  }, []);

  //监听鼠标在3D object上的事件
  // 因为要在拖动每个3D object时候 关闭和启用，所以不能都写在上面的useEffect里面
  // hoveron 当指针移动到一个3D Object或者其某个子级上时触发
  // hoveroff 当指针移出一个3D Object时触发。
  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", (e) => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", (e) => {
      scene.orbitControls.enabled = true;
    });
  }, [children]);

  return (
    <group ref={groupRef}>
      <dragControls
        ref={controlsRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Dragable;

