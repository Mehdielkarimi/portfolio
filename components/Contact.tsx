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
];

export default function Contact() {
  return (
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
                {link.display}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-white/[0.08] pt-8 text-xs uppercase tracking-[0.16em] text-zinc-800 sm:flex-row sm:justify-between">
          <span>© 2026 Mehdi ElKarimi</span>
        </div>
      </Reveal>
    </Section>
  );
}
