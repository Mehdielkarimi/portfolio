"use client";

import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CRTModel from "./CRTModel";

type ThreeSceneProps = {
  modelPath: string;
};

export default function ThreeScene({ modelPath }: ThreeSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMappingExposure: 1.1 }}
      camera={{ position: [0, 0.6, 20], fov: 34 }}
      shadows
    >
      <Suspense
        fallback={
          <Html center>
            <div className="h-20 w-20 rounded-full border border-white/10 border-t-accent animate-spin" />
          </Html>
        }
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[-6, 10, 7]} intensity={2.4} color="#fffaf0" castShadow shadow-mapSize={[2048, 2048]} />
        <directionalLight position={[9, 2, 3]} intensity={1.0} color="#a8c8ff" />
        <directionalLight position={[1, -3, -10]} intensity={0.5} color="#223344" />
        <pointLight position={[0, 0.5, 4.5]} intensity={8} color="#a8ff78" distance={14} decay={2} />
        <pointLight position={[0, -3, 2]} intensity={4} color="#78ff9a" distance={7} decay={2} />

        <CRTModel modelPath={modelPath} />
      </Suspense>
    </Canvas>
  );
}
