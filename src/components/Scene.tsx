"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment } from "@react-three/drei";
function Scene() {
  return (
    <Canvas style={{ background: "black", width: "500px" }}>
      <Model />
      directionalLight intensity={2} position={[0, 2, 3]}
      <Environment files={"/medias/city.hdr"} />
    </Canvas>
  );
}
export default Scene;
