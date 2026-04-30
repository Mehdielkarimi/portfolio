"use client";

import { Html } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo } from "react";
import { MathUtils, Vector3 } from "three";

import CRTModel from "@/components/CRTModel";

type CRTSceneProps = {
  modelPath: string;
  progress: number;
};

const CAMERA_START = new Vector3(0, 1.2, 5.5);
const CAMERA_END = new Vector3(0, 0.6, 3.2);
const TARGET_START = new Vector3(0, -0.6, 0);
const TARGET_END = new Vector3(0, 0.35, 0);

function CameraRig({ progress }: { progress: number }) {
  const { camera } = useThree();
  const position = useMemo(() => new Vector3(), []);
  const target = useMemo(() => new Vector3(), []);

  useFrame(() => {
    const clampedProgress = MathUtils.clamp(progress, 0, 1);

    position.lerpVectors(CAMERA_START, CAMERA_END, clampedProgress);
    target.lerpVectors(TARGET_START, TARGET_END, clampedProgress);

    camera.position.copy(position);
    camera.lookAt(target);
  });

  return null;
}

export default function CRTScene({ modelPath, progress }: CRTSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMappingExposure: 1.05 }}
      camera={{ position: [0, 0, 8.5], fov: 38 }}
      shadows
    >
      <Suspense
        fallback={
          <Html center>
            <div className="h-16 w-16 animate-spin rounded-full border border-white/10 border-t-accent" />
          </Html>
        }
      >
        <CameraRig progress={progress} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff5e6" />
        <directionalLight position={[-4, 2, 3]} intensity={0.55} color="#d9ffe0" />
        <pointLight position={[0.2, 1.4, 2.8]} intensity={1.1} color="#98ff88" distance={7} decay={2} />
        <pointLight position={[0, -1.8, 3.8]} intensity={0.5} color="#86c96c" distance={8} decay={2} />

        <CRTModel modelPath={modelPath} />
      </Suspense>
    </Canvas>
  );
}
