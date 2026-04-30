"use client";

import { useEffect, useRef, useState } from "react";
import {
  CanvasTexture,
  LinearFilter,
  SRGBColorSpace,
} from "three";

export type ScreenSection = "about" | "projects" | "experience" | "contact";

export const screenNavItems: Array<{ id: ScreenSection; label: string }> = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = 768;
const CONTENT_X = 82;
const CONTENT_Y = 150;

const aboutParagraphs = [
  "I'm a Computer Science student at Al Akhawayn University with experience across software engineering, research, and game development.",
  "My work includes offline tracking research in out-of-home advertising, where I explored how real-world exposure can connect to measurable user behavior and campaign performance.",
  "I'm particularly interested in building systems that combine backend logic, data processing, and usable interfaces whether that's marketplace platforms, tracking solutions, or interactive applications.",
];

const projectCards = [
  {
    title: "Billboard Marketplace Concept",
    year: "2025",
    body: "A concept for booking billboard inventory with offline tracking built in, so physical ad exposure can connect to measurable outcomes.",
  },
  {
    title: "Offline Tracking / OOH Research",
    year: "2025",
    body: "Research on attribution and behavior signals that bridge offline impressions with campaign performance in the real world.",
  },
  {
    title: "Game Projects in Unreal & Unity",
    year: "2024",
    body: "Prototypes focused on environment logic, interaction systems, and performance tradeoffs across real-time 3D workflows.",
  },
  {
    title: "Portfolio / Front-End Systems",
    year: "2026",
    body: "A focused portfolio experience built to communicate projects, systems thinking, and engineering range with clarity.",
  },
];

const experienceItems = [
  {
    role: "Research Intern",
    org: "Offline Tracking / OOH Advertising",
    body: "Worked on system-level thinking for measuring real-world ad exposure and connecting it to user behavior.",
  },
  {
    role: "Founder & President",
    org: "Lions' Press",
    body: "Built and led a sports journalism club, shaping operations, editorial direction, and team coordination.",
  },
  {
    role: "Exchange Semester",
    org: "University of Tsukuba",
    body: "Expanded my technical and academic perspective through an international study environment.",
  },
  {
    role: "Exchange Semester",
    org: "Technical University of Ostrava",
    body: "Strengthened adaptability and cross-context collaboration in a second exchange setting.",
  },
];

const contactItems = [
  "Email  mehdielkarimi1@gmail.com",
  "LinkedIn  linkedin.com/in/mehdi-elkarimi-91588a259",
  "GitHub  github.com/Mehdielkarimi",
];

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > maxWidth && line) {
      lines.push(line);
      line = word;
      return;
    }
    line = next;
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function drawParagraph(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  color = "#b6b6b6",
) {
  ctx.fillStyle = color;
  const lines = wrapText(ctx, text, maxWidth);
  let cursorY = y;

  lines.forEach((line) => {
    ctx.fillText(line, x, cursorY);
    cursorY += lineHeight;
  });

  return cursorY;
}

function drawBase(ctx: CanvasRenderingContext2D, tick: number) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const background = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
  background.addColorStop(0, "#040604");
  background.addColorStop(1, "#020302");
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const glow = ctx.createRadialGradient(
    CANVAS_WIDTH * 0.5,
    120,
    0,
    CANVAS_WIDTH * 0.5,
    120,
    540,
  );
  glow.addColorStop(0, "rgba(168,255,120,0.11)");
  glow.addColorStop(0.45, "rgba(168,255,120,0.03)");
  glow.addColorStop(1, "rgba(168,255,120,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.fillStyle = "rgba(0, 0, 0, 0.92)";
  ctx.fillRect(0, 0, CANVAS_WIDTH, 78);

  ctx.fillStyle = "rgba(255,255,255,0.04)";
  ctx.fillRect(0, 78, CANVAS_WIDTH, 1);

  const flicker = 0.018 + ((tick % 5) / 5) * 0.012;
  ctx.fillStyle = `rgba(255,255,255,${flicker.toFixed(3)})`;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function drawNav(ctx: CanvasRenderingContext2D, activeSection: ScreenSection) {
  const dots = ["#ef6d6d", "#e2b72d", "#9de06f"];

  dots.forEach((color, index) => {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(42 + index * 28, 39, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.font = '500 22px "Segoe UI", Arial, sans-serif';
  ctx.textBaseline = "middle";

  let navX = CANVAS_WIDTH - 470;
  screenNavItems.forEach((item) => {
    const active = item.id === activeSection;
    ctx.fillStyle = active ? "#a8ff78" : "#72727a";
    ctx.fillText(item.label, navX, 38);

    if (active) {
      const width = ctx.measureText(item.label).width;
      ctx.fillRect(navX, 58, width, 2);
    }

    navX += 115;
  });
}

function drawSectionHeader(
  ctx: CanvasRenderingContext2D,
  eyebrow: string,
  title: string,
  titleSize = 74,
) {
  ctx.textBaseline = "top";
  ctx.fillStyle = "#8ccf61";
  ctx.font = '600 18px "Segoe UI", Arial, sans-serif';
  ctx.fillText(eyebrow.toUpperCase(), CONTENT_X, CONTENT_Y);

  ctx.fillStyle = "#f2f2f2";
  ctx.font = `300 ${titleSize}px "Segoe UI", Arial, sans-serif`;

  let cursorY = CONTENT_Y + 52;
  title.split("\n").forEach((line) => {
    ctx.fillText(line, CONTENT_X, cursorY);
    cursorY += titleSize * 0.92;
  });

  return cursorY + 20;
}

function drawAbout(ctx: CanvasRenderingContext2D) {
  let cursorY = drawSectionHeader(
    ctx,
    "About",
    "Turning\ncomplexity into\nclarity.",
  );

  ctx.font = '300 22px "Segoe UI", Arial, sans-serif';
  aboutParagraphs.forEach((paragraph, index) => {
    cursorY = drawParagraph(
      ctx,
      paragraph,
      CONTENT_X,
      cursorY,
      710,
      36,
      index === 0 ? "#d7d7d7" : "#a7a7a7",
    );
    cursorY += 16;
  });
}

function drawProjects(ctx: CanvasRenderingContext2D) {
  drawSectionHeader(ctx, "Projects", "Selected work.", 62);
  const startY = CONTENT_Y + 132;
  const colWidth = 390;
  const rowHeight = 230;

  projectCards.forEach((project, index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const x = CONTENT_X + col * 430;
    const y = startY + row * rowHeight;

    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, colWidth, 188);

    ctx.fillStyle = "#f2f2f2";
    ctx.font = '400 28px "Segoe UI", Arial, sans-serif';
    ctx.fillText(project.title, x + 22, y + 24, colWidth - 70);

    ctx.fillStyle = "#67676f";
    ctx.font = '500 14px "Segoe UI", Arial, sans-serif';
    ctx.fillText(project.year, x + colWidth - 62, y + 28);

    ctx.fillStyle = "#a9a9ad";
    ctx.font = '300 19px "Segoe UI", Arial, sans-serif';
    drawParagraph(ctx, project.body, x + 22, y + 72, colWidth - 44, 29);
  });
}

function drawExperience(ctx: CanvasRenderingContext2D) {
  drawSectionHeader(ctx, "Experience", "Where I've been.", 60);
  const startY = CONTENT_Y + 132;

  experienceItems.forEach((item, index) => {
    const y = startY + index * 128;

    ctx.fillStyle = index < 2 ? "#a8ff78" : "#6b7280";
    ctx.beginPath();
    ctx.arc(CONTENT_X + 6, y + 12, 6, 0, Math.PI * 2);
    ctx.fill();

    if (index < experienceItems.length - 1) {
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      ctx.fillRect(CONTENT_X + 5, y + 24, 2, 96);
    }

    ctx.fillStyle = "#f2f2f2";
    ctx.font = '400 28px "Segoe UI", Arial, sans-serif';
    ctx.fillText(item.role, CONTENT_X + 32, y - 4);

    ctx.fillStyle = "#8c8c92";
    ctx.font = '500 14px "Segoe UI", Arial, sans-serif';
    ctx.fillText(item.org.toUpperCase(), CONTENT_X + 32, y + 34);

    ctx.fillStyle = "#a8a8ad";
    ctx.font = '300 18px "Segoe UI", Arial, sans-serif';
    drawParagraph(ctx, item.body, CONTENT_X + 32, y + 58, 760, 28);
  });
}

function drawContact(ctx: CanvasRenderingContext2D) {
  let cursorY = drawSectionHeader(
    ctx,
    "Contact",
    "Let's build\nsomething worth\nremembering.",
    60,
  );

  ctx.fillStyle = "#b0b0b5";
  ctx.font = '300 22px "Segoe UI", Arial, sans-serif';
  cursorY = drawParagraph(
    ctx,
    "I'm currently open to internships, research opportunities, and engineering roles focused on real-world systems and data-driven products.",
    CONTENT_X,
    cursorY,
    720,
    34,
  );

  cursorY += 36;
  contactItems.forEach((item) => {
    ctx.fillStyle = "#f2f2f2";
    ctx.font = '400 24px "Segoe UI", Arial, sans-serif';
    ctx.fillText(item, CONTENT_X, cursorY);
    cursorY += 58;
  });

  ctx.fillStyle = "#66666b";
  ctx.font = '500 13px "Segoe UI", Arial, sans-serif';
  ctx.fillText("Real links remain available in the accessible HTML portfolio below.", CONTENT_X, CANVAS_HEIGHT - 44);
}

function drawScanlines(ctx: CanvasRenderingContext2D) {
  ctx.save();
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = "#ffffff";
  for (let y = 0; y < CANVAS_HEIGHT; y += 3) {
    ctx.fillRect(0, y, CANVAS_WIDTH, 1);
  }
  ctx.restore();
}

function drawVignette(ctx: CanvasRenderingContext2D) {
  const vignette = ctx.createRadialGradient(
    CANVAS_WIDTH * 0.5,
    CANVAS_HEIGHT * 0.5,
    180,
    CANVAS_WIDTH * 0.5,
    CANVAS_HEIGHT * 0.5,
    620,
  );
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(0.72, "rgba(0,0,0,0.12)");
  vignette.addColorStop(1, "rgba(0,0,0,0.5)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function drawTexture(
  ctx: CanvasRenderingContext2D,
  activeSection: ScreenSection,
  tick: number,
) {
  drawBase(ctx, tick);
  drawNav(ctx, activeSection);

  switch (activeSection) {
    case "about":
      drawAbout(ctx);
      break;
    case "projects":
      drawProjects(ctx);
      break;
    case "experience":
      drawExperience(ctx);
      break;
    case "contact":
      drawContact(ctx);
      break;
  }

  drawScanlines(ctx);
  drawVignette(ctx);
}

export function useScreenCanvasTexture(activeSection: ScreenSection) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textureRef = useRef<CanvasTexture | null>(null);
  const [texture, setTexture] = useState<CanvasTexture | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    const nextTexture = new CanvasTexture(canvas);
    nextTexture.colorSpace = SRGBColorSpace;
    nextTexture.minFilter = LinearFilter;
    nextTexture.magFilter = LinearFilter;
    nextTexture.needsUpdate = true;

    canvasRef.current = canvas;
    textureRef.current = nextTexture;
    setTexture(nextTexture);

    return () => {
      nextTexture.dispose();
      canvasRef.current = null;
      textureRef.current = null;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const nextTexture = textureRef.current;

    if (!canvas || !nextTexture) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let tick = 0;
    const render = () => {
      drawTexture(ctx, activeSection, tick);
      nextTexture.needsUpdate = true;
      tick += 1;
    };

    render();
    const intervalId = window.setInterval(render, 180);

    return () => window.clearInterval(intervalId);
  }, [activeSection, texture]);

  return texture;
}
