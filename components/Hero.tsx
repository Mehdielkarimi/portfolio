<<<<<<< HEAD
export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 1.5rem", textAlign: "center", position: "relative" }}>
      <div style={{ pointerEvents: "none", position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(168,255,120,0.04) 0%, transparent 70%)" }} />
      <div style={{ maxWidth: "760px", width: "100%" }}>
        <div className="hero-item" style={{ marginBottom: "2.5rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", animationDelay: "0ms" }}>
          <span style={{ position: "relative", display: "flex", height: "0.5rem", width: "0.5rem" }}>
            <span className="animate-ping" style={{ position: "absolute", display: "inline-flex", height: "100%", width: "100%", borderRadius: "9999px", backgroundColor: "#a8ff78", opacity: 0.6 }} />
            <span style={{ position: "relative", display: "inline-flex", height: "0.5rem", width: "0.5rem", borderRadius: "9999px", backgroundColor: "#a8ff78" }} />
          </span>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#a8ff78" }}>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <h1 className="hero-item" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: "1.25rem", animationDelay: "120ms" }}>
          Mehdi<br />
          <span style={{ color: "#888888" }}>ElKarimi</span>
        </h1>

        <p className="hero-item" style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)", fontWeight: 300, letterSpacing: "0.05em", color: "#666666", marginBottom: "2rem", animationDelay: "240ms" }}>
          Computer Science Student & Software Engineer
        </p>

        <div className="hero-item" style={{ margin: "0 auto 2rem", height: "1px", width: "4rem", backgroundColor: "#1f1f1f", animationDelay: "360ms" }} />

        <p className="hero-item" style={{ maxWidth: "500px", margin: "0 auto", fontSize: "clamp(0.95rem, 2vw, 1.05rem)", fontWeight: 300, lineHeight: 1.8, color: "#555555", animationDelay: "480ms" }}>
          I build clean, thoughtful software at the intersection of engineering and design. Passionate about systems, interfaces, and the craft of writing code that lasts.
        </p>

        <div className="hero-item" style={{ marginTop: "5rem", animationDelay: "600ms" }}>
          <div className="scroll-hint" style={{ margin: "0 auto", display: "flex", height: "2.25rem", width: "1.25rem", alignItems: "flex-start", justifyContent: "center", borderRadius: "9999px", border: "1px solid #222222", paddingTop: "0.375rem" }}>
            <div style={{ height: "0.375rem", width: "0.25rem", borderRadius: "9999px", backgroundColor: "#333333" }} />
          </div>
        </div>
      </div>
=======
"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(168,255,120,0.05)_0%,transparent_70%)]" />
      <motion.div
        className="relative mx-auto flex max-w-[760px] flex-col items-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-accent"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available For Opportunities
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl font-light tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl"
        >
          Mehdi
          <br />
          <span className="text-zinc-500">ElKarimi</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 text-sm font-light uppercase tracking-[0.18em] text-zinc-500 sm:text-base"
        >
          Computer Science Student &amp; engineering/development enthusiast
        </motion.p>
        <motion.div
          variants={item}
          className="mt-8 h-px w-16 bg-white/10"
        />
        <motion.p
          variants={item}
          className="mt-8 max-w-[560px] text-base leading-8 text-zinc-400 sm:text-lg"
        >
          I work on software systems, game development, and practical products
          shaped by real-world constraints. My focus is building tools and
          applications that turn data into decisions.
        </motion.p>
      </motion.div>
>>>>>>> e53c19f9 (Remove node_modules from repo)
    </section>
  );
}
