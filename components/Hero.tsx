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
    </section>
  );
}
