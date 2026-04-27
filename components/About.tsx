<<<<<<< HEAD
export default function About() {
  return (
    <section style={{ padding: "160px 1.5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <p style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#a8ff78", marginBottom: "2.5rem" }}>ABOUT</p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: "2.5rem" }}>
          Turning complexity<br />
          <span style={{ color: "#444444" }}>into clarity.</span>
        </h2>
        <div style={{ maxWidth: "580px", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "#888888" }}>
            {"I'm a Computer Science student with a deep interest in building software that is both performant and elegant. I gravitate toward full-stack development, systems thinking, and the kind of engineering that makes hard problems feel simple."}
          </p>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, color: "#666666" }}>
            {"Outside of code, I'm drawn to mathematics, distributed systems, and understanding how things work at their core. I believe great software is less about lines of code and more about the thinking that goes into every decision."}
          </p>
        </div>
      </div>
    </section>
=======
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Turning complexity into clarity.">
      <Reveal className="max-w-[580px] space-y-5">
        <p className="text-base font-light leading-8 text-zinc-300 sm:text-lg">
          I&apos;m Computer Science student at Al Akhawayn University with experience across software engineering, research, and game development.

My work includes research on offline tracking in out-of-home advertising, where I explored how real-world exposure can be connected to measurable user behavior and campaign performance.
I’m particularly interested in building systems that combine backend logic, data processing, and usable interfaces — whether that’s marketplace platforms, tracking solutions, or interactive applications.
        </p>
        <p className="text-base font-light leading-8 text-zinc-400 sm:text-lg">
          I&apos;m especially interested in building real-world systems that
          combine clear engineering, usable interfaces, and meaningful data,
          whether that means marketplace platforms, tracking solutions, or
          interactive applications.
        </p>
      </Reveal>
    </Section>
>>>>>>> e53c19f9 (Remove node_modules from repo)
  );
}
