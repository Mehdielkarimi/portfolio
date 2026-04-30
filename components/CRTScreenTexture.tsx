"use client";

import type { BufferGeometry, CanvasTexture } from "three";
import { DoubleSide } from "three";

type CRTScreenTextureProps = {
  geometry: BufferGeometry;
  position: [number, number, number];
  texture: CanvasTexture | null;
};

export default function CRTScreenTexture({
  geometry,
  position,
  texture,
}: CRTScreenTextureProps) {
  if (!texture) {
    return null;
  }

  return (
    <>
      <mesh position={position} geometry={geometry} renderOrder={8}>
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          side={DoubleSide}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
      <mesh
        position={[position[0], position[1], position[2] + 0.008]}
        geometry={geometry}
        renderOrder={9}
      >
        <meshBasicMaterial
          color="#d8ffe3"
          transparent
          opacity={0.045}
          toneMapped={false}
          side={DoubleSide}
          depthWrite={false}
          depthTest={false}
        />
      </mesh>
    </>
  );
}
