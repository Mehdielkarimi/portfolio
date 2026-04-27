<<<<<<< HEAD
const links = [
  { label: "Email", href: "mailto:mehdi.elkarimi@example.com", display: "mehdi.elkarimi@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mehdielkarimi", display: "linkedin.com/in/mehdielkarimi" },
  { label: "GitHub", href: "https://github.com/mehdielkarimi", display: "github.com/mehdielkarimi" },
=======
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const links = [
  {
    label: "Email",
    href: "mailto:mehdielkarimi1@gmail.com",
    display: "mehdielkarimi1@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mehdi-elkarimi-91588a259/",
    display: "linkedin.com/in/mehdi-elkarimi-91588a259",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mehdielkarimi",
    display: "github.com/Mehdielkarimi",
  },
>>>>>>> e53c19f9 (Remove node_modules from repo)
];

export default function Contact() {
  return (
<<<<<<< HEAD
    <section style={{ padding: "160px 1.5rem 120px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", height: "1px", backgroundColor: "#141414" }} />
        <p style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#a8ff78", marginBottom: "2rem" }}>CONTACT</p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: "1.5rem" }}>
          {"Let's build something"}<br />
          <span style={{ color: "#444444" }}>worth remembering.</span>
        </h2>
        <p style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.8, color: "#555555", maxWidth: "400px", marginBottom: "3.5rem" }}>
          {"I'm open to internships, full-time roles, and interesting collaborations. If you have something in mind, reach out."}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {links.map((link) => (
            <div key={link.label} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#333333", width: "5rem" }}>{link.label}</span>
              <a href={link.href} target={link.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="contact-link" style={{ fontSize: "0.875rem", fontWeight: 300, color: "#777777", textDecoration: "none", position: "relative" }}>
=======
    <Section id="contact" eyebrow="Contact" title="Let&apos;s build something worth remembering.">
      <Reveal className="space-y-8">
        <p className="max-w-[420px] text-sm font-light leading-8 text-zinc-400 sm:text-base">
          I&apos;m currently open to internships, research opportunities, and engineering roles where I can contribute to real-world systems and data-driven products.
        </p>
        <div className="space-y-4">
          {links.map((link) => (
            <div key={link.label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
              <span className="w-20 text-xs uppercase tracking-[0.16em] text-zinc-700">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm font-light text-zinc-300 transition-all duration-300 hover:translate-x-1 hover:text-accent sm:text-base"
              >
>>>>>>> e53c19f9 (Remove node_modules from repo)
                {link.display}
              </a>
            </div>
          ))}
        </div>
<<<<<<< HEAD
        <div style={{ marginTop: "6rem", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#252525" }}>© 2025 Mehdi ElKarimi</span>
          <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#252525" }}>Built with Next.js & Tailwind</span>
        </div>
      </div>
    </section>
=======
        <div className="flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-xs uppercase tracking-[0.16em] text-zinc-800 sm:flex-row sm:justify-between">
          <span>© 2026 Mehdi ElKarimi</span>
        </div>
      </Reveal>
    </Section>
>>>>>>> e53c19f9 (Remove node_modules from repo)
  );
}
