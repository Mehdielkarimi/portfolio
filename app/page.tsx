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
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
