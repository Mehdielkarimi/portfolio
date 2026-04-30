"use client";

import dynamic from "next/dynamic";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ScreenOverlay from "@/components/ScreenOverlay";

const CRTScene = dynamic(() => import("@/components/CRTScene"), { ssr: false });

const MODEL_PATH = "/models/90s-00s-pc/source/zombie _computer.glb";
const STAGE_EASE = [0.22, 1, 0.36, 1] as const;
const SCREEN_REVEAL_START = 0.65;
const SCREEN_REVEAL_END = 0.84;

type NavigatorWithDeviceMemory = Navigator & {
  deviceMemory?: number;
};

function FallbackPortfolio() {
  return (
    <div className="mx-auto w-full max-w-[920px] rounded-[2rem] border border-white/10 bg-black/70 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
      <div className="mb-4 flex items-center gap-2 border-b border-white/8 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
      </div>
      <div className="mx-auto max-w-[900px]">
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default function CRTExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [supports3D, setSupports3D] = useState(false);
  const [sceneProgress, setSceneProgress] = useState(0);

  useEffect(() => {
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
      } catch {
        return false;
      }
    })();

    const browserNavigator = navigator as NavigatorWithDeviceMemory;
    const lowPower =
      (browserNavigator.hardwareConcurrency && browserNavigator.hardwareConcurrency <= 4) ||
      (typeof browserNavigator.deviceMemory === "number" && browserNavigator.deviceMemory <= 4);

    setSupports3D(hasWebGL && !reduceMotion && !lowPower);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 20%"],
  });

  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  useMotionValueEvent(smoothedProgress, "change", (value) => {
    setSceneProgress(value);
  });

  const stageOpacity = useTransform(smoothedProgress, [0, 0.14], [0, 1]);
  const stageScale = useTransform(smoothedProgress, [0, 0.16], [0.92, 1]);
  const stageY = useTransform(smoothedProgress, [0, 0.16], [40, 0]);

  const overlayOpacity = useTransform(
    smoothedProgress,
    [SCREEN_REVEAL_START, SCREEN_REVEAL_END],
    [0, 1]
  );
  const overlayScale = useTransform(
    smoothedProgress,
    [SCREEN_REVEAL_START, SCREEN_REVEAL_END],
    [0.85, 1]
  );
  const overlayY = useTransform(
    smoothedProgress,
    [SCREEN_REVEAL_START, SCREEN_REVEAL_END],
    [20, 0]
  );

  const screenContent = useMemo(
    () => (
      <>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </>
    ),
    []
  );

  return (
    <section ref={sectionRef} className="relative">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-background" />

      {supports3D ? (
        <div className="relative h-[360svh]">
          <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
            <motion.div
              style={{ opacity: stageOpacity, scale: stageScale, y: stageY }}
              transition={{ duration: 1.1, ease: STAGE_EASE }}
              className="relative mx-auto aspect-[1.42/1] w-full max-w-[1380px]"
            >
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(168,255,120,0.08),transparent_35%)] blur-3xl" />
              <div className="relative h-full w-full">
                <div className="monitor-backlight" />
                <CRTScene modelPath={MODEL_PATH} progress={sceneProgress} />
                <ScreenOverlay
                  opacity={overlayOpacity}
                  scale={overlayScale}
                  y={overlayY}
                  isInteractive={sceneProgress > SCREEN_REVEAL_START + 0.04}
                >
                  {screenContent}
                </ScreenOverlay>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="px-4 pb-16 sm:px-6 lg:px-10">
          <FallbackPortfolio />
        </div>
      )}
    </section>
  );
}
