"use client";

import { motion, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ScreenNav, { type ScreenSection } from "@/components/ScreenNav";

type ScreenOverlayProps = {
  children: React.ReactNode;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  y: MotionValue<number>;
  isInteractive: boolean;
};

const sectionIds: ScreenSection[] = ["about", "projects", "experience", "contact"];

const SCREEN_LEFT = "50%";
const SCREEN_TOP = "49.9%";
const SCREEN_WIDTH = "38.3%";
const SCREEN_HEIGHT = "47.2%";
const SCREEN_ROTATE_X = "0deg";
const SCREEN_ROTATE_Y = "-4deg";

export default function ScreenOverlay({
  children,
  opacity,
  scale,
  y,
  isInteractive,
}: ScreenOverlayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<ScreenSection>("about");

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id as ScreenSection);
        }
      },
      {
        root,
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-12% 0px -38% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = root.querySelector<HTMLElement>(`#${id}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: ScreenSection) => {
    const target = scrollRef.current?.querySelector<HTMLElement>(`#${sectionId}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="absolute z-20"
      style={{
        left: SCREEN_LEFT,
        top: SCREEN_TOP,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        pointerEvents: isInteractive ? "auto" : "none",
        transform: `translate(-50%, -50%) rotateX(${SCREEN_ROTATE_X}) rotateY(${SCREEN_ROTATE_Y})`,
        transformOrigin: "center center",
      }}
    >
      <motion.div
        className="crt-screen-wrap h-full w-full overflow-hidden rounded-[22px] border border-white/8 bg-[rgba(0,0,0,0.88)] shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(80,255,120,0.08)]"
        style={{ opacity, scale, y }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,255,120,0.08),transparent_40%)] pointer-events-none" />
        <div
          ref={scrollRef}
          className="relative h-full overflow-y-auto overscroll-contain [scrollbar-color:rgba(168,255,120,0.28)_transparent] [scrollbar-width:thin]"
        >
          <div className="sticky top-0 z-20 px-4 pt-4 sm:px-5">
            <ScreenNav activeSection={activeSection} onNavigate={handleNavigate} />
          </div>
          <div className="crt-screen-content mx-auto w-full max-w-[860px] px-5 pb-12 pt-3 sm:px-6">
            {children}
          </div>
        </div>
        <div className="crt-css-overlay" />
      </motion.div>
    </div>
  );
}
