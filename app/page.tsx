<<<<<<< HEAD
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
      <div style={{ position: "relative", zIndex: 10 }}>
=======
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="top" className="relative overflow-x-clip bg-background">
      <Navbar />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[160px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[900px] flex-col px-6 sm:px-8 lg:px-0">
>>>>>>> e53c19f9 (Remove node_modules from repo)
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
