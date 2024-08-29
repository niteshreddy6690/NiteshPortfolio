import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useGLTF,
  Text,
  Wireframe,
  Image,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Mesh } from "three";
import * as THREE from "three";

export default function Model() {
  const { nodes } = useGLTF("/torrus.glb") as any;
  const { viewport } = useThree();
  const torus = useRef<Mesh>(null);

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  type MeshTransmissionMaterialProps =
    JSX.IntrinsicElements["meshPhysicalMaterial"] & {
      /* Transmission, default: 1 */
      transmission?: number | 1;
      /* Thickness (refraction), default: 0 */
      thickness?: number | 0;
      /** Backside thickness (when backside is true), default: 0 */
      backsideThickness?: number | 0;
      /* Roughness (blur), default: 0 */
      roughness?: number | 0;
      /* Chromatic aberration, default: 0.03 */
      chromaticAberration?: number | 0.03;
      /* Anisotropy, default: 0.1 */
      anisotropicBlur?: number | 0.2;
      /* Distortion, default: 0 */
      distortion?: number | 0;
      /* Distortion scale, default: 0.5 */
      distortionScale: number | 0.5;
      /* Temporal distortion (speed of movement), default: 0.0 */
      temporalDistortion?: number;

      backside?: boolean | false;
    };

  // type MeshTransmissionMaterialProps = Pick<
  //   Omit<MeshTransmissionMaterialProps, "args"> & {
  //     transmissionSampler?: boolean;
  //     backside?: boolean;
  //     backsideThickness?: number;
  //     resolution?: number;
  //     backsideResolution?: number;
  //     samples?: number;
  //     background?: THREE.Color | THREE.Texture;
  //   },
  //   | "transmissionSampler"
  //   | "backside"
  //   | "backsideThickness"
  //   | "resolution"
  //   | "backsideResolution"
  //   | "samples"
  //   | "background"
  // >;

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
    distortionScale: 0.5,
    temporalDistortion: 0.5,
  };

  return (
    <group scale={viewport.width / 1.75}>
      {/* <Text
        position={[0, 0, -1]}
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Nitesh S
      </Text> */}

      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
        {/* <Wireframe /> */}
      </mesh>
    </group>
  );
}
