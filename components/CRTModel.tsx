"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { Box3, Group, Mesh, MeshStandardMaterial, Object3D, Vector3 } from "three";

type CRTModelProps = {
  modelPath: string;
};

type LitMaterial = MeshStandardMaterial & {
  envMapIntensity?: number;
};

const MODEL_FIT_SIZE = 2.5;
const MODEL_SCALE_MULTIPLIER = 1.1;
const MODEL_POSITION_Y = -1.5;
const MODEL_FLOAT_STRENGTH = 0;

function applyMaterialTuning(root: Object3D) {
  root.traverse((child) => {
    if (!(child instanceof Mesh)) {
      return;
    }

    child.castShadow = true;
    child.receiveShadow = true;

    if (Array.isArray(child.material)) {
      return;
    }

    const material = child.material;
    if (!(material instanceof MeshStandardMaterial)) {
      return;
    }

    const tunedMaterial = material as LitMaterial;
    tunedMaterial.roughness = Math.min(tunedMaterial.roughness * 1.08, 1);
    tunedMaterial.metalness = tunedMaterial.metalness * 0.85;
    tunedMaterial.envMapIntensity = 1.6;
    tunedMaterial.needsUpdate = true;
  });
}

export default function CRTModel({ modelPath }: CRTModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const [fitScale, setFitScale] = useState(1);

  useLayoutEffect(() => {
    const bounds = new Box3().setFromObject(clonedScene);
    const center = bounds.getCenter(new Vector3());
    const size = bounds.getSize(new Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z);

    clonedScene.position.set(-center.x, -center.y, -center.z);
    setFitScale((MODEL_FIT_SIZE / maxDimension) * MODEL_SCALE_MULTIPLIER);

    applyMaterialTuning(clonedScene);
  }, [clonedScene]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const group = groupRef.current;

    if (!group) {
      return;
    }

    group.position.y =
      MODEL_POSITION_Y +
      Math.sin(elapsed ) * MODEL_FLOAT_STRENGTH;
    group.rotation.x = Math.sin(elapsed * 0.32) * 0.014;
    group.rotation.y = Math.sin(elapsed * 0.38) * 0.008;
  });

  return (
    <group
      ref={groupRef}
      position={[0, MODEL_POSITION_Y, 0]}
      rotation={[0, 0, 0]}
      scale={fitScale}
    >
      <primitive object={clonedScene} rotation={[0, -Math.PI -Math.PI / 2, 0]} />
    </group>
  );
}

useGLTF.preload("/models/90s-00s-pc/source/zombie _computer.glb");
