<<<<<<< HEAD
const experiences = [
  {
    role: "Software Engineering Intern",
    org: "Tech Startup — Remote",
    period: "Summer 2024",
    description: "Built and shipped a real-time analytics pipeline processing 50K+ events/day. Reduced API response time by 38% through query optimization and caching layers.",
    type: "work",
  },
  {
    role: "Open Source Contributor",
    org: "Various Projects",
    period: "2023 – Present",
    description: "Actively contributing to open source tooling. Merged PRs in developer tooling, documentation, and core library improvements across multiple repositories.",
    type: "work",
  },
  {
    role: "Teaching Assistant — Algorithms",
    org: "University",
    period: "2023 – 2024",
    description: "Led weekly problem-solving sessions for 30+ students. Wrote supplementary material on graph algorithms and dynamic programming.",
    type: "work",
  },
  {
    role: "B.Sc. Computer Science",
    org: "University",
    period: "2022 – Present",
    description: "Coursework in algorithms, operating systems, distributed computing, and compilers. Focus on systems programming and theoretical CS.",
=======
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const experience = [
  {
    role: "Research Intern",
    organization: "Offline Tracking / OOH Advertising Research",
    period: "Internship",
    description:
      "Contributed to research on offline tracking systems for out-of-home advertising. Explored how real-world exposure could be connected to measurable user behavior using location data and attribution models. Focused on translating abstract tracking challenges into practical system-level approaches.",
    type: "work",
  },
  {
    role: "Founder & President",
    organization: "Lions' Press",
    period: "Student Leadership",
    description:
      "Founded and led a sports journalism club, defining its structure, organizing content production, and coordinating team efforts. Managed operations, editorial direction, and member engagement, building a functioning student media initiative from the ground up.",
    type: "work",
  },
  {
    role: "Exchange Semester",
    organization: "University of Tsukuba",
    period: "Study Abroad",
    description:
      "Completed a semester abroad in a new academic environment, gaining broader exposure to international collaboration, different learning approaches, and technical perspectives beyond my home institution.",
    type: "education",
  },
  {
    role: "Exchange Semester",
    organization: "Technical University of Ostrava",
    period: "Study Abroad",
    description:
      "Studied abroad in a second exchange setting that expanded my academic perspective and adaptability. The experience reinforced my ability to work across different systems, teams, and contexts.",
>>>>>>> e53c19f9 (Remove node_modules from repo)
    type: "education",
  },
];

export default function Experience() {
  return (
<<<<<<< HEAD
    <section style={{ padding: "160px 1.5rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <p style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#a8ff78", marginBottom: "2.5rem" }}>EXPERIENCE</p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#f0f0f0", marginBottom: "3.5rem" }}>
          {"Where I've"}<br />
          <span style={{ color: "#444444" }}>been.</span>
        </h2>
        {experiences.map((exp, i) => (
          <div key={exp.role} style={{ position: "relative", display: "flex", gap: "2rem", paddingBottom: "3rem" }}>
            {i < experiences.length - 1 && (
              <div style={{ position: "absolute", left: "5px", top: "12px", height: "100%", width: "1px", backgroundColor: "#161616" }} />
            )}
            <div style={{ marginTop: "5px", flexShrink: 0, height: "0.75rem", width: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ height: "0.5rem", width: "0.5rem", borderRadius: "9999px", backgroundColor: exp.type === "education" ? "#2a2a2a" : "#1e3a1e", border: `1px solid ${exp.type === "education" ? "#333333" : "#3a5a3a"}` }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.5rem 0.75rem", marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 400, color: "#f0f0f0" }}>{exp.role}</span>
                <span style={{ fontFamily: "monospace", fontSize: "0.75rem", letterSpacing: "0.05em", color: "#404040" }}>{exp.period}</span>
              </div>
              <p style={{ fontSize: "0.875rem", fontWeight: 300, color: "#555555", marginBottom: "0.5rem" }}>{exp.org}</p>
              <p style={{ fontSize: "0.875rem", fontWeight: 300, lineHeight: 1.7, color: "#454545", maxWidth: "500px" }}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
=======
    <Section id="experience" eyebrow="Experience" title="Where I&apos;ve been.">
      <div className="space-y-10">
        {experience.map((item, index) => (
          <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.08}>
            <article className="relative flex gap-5 pb-4">
              {index < experience.length - 1 ? (
                <div className="absolute left-[0.34rem] top-3 h-full w-px bg-white/8" />
              ) : null}
              <div className="relative mt-1 h-3 w-3 shrink-0 rounded-full border border-white/10 bg-[#1e3a1e]">
                <div
                  className={
                    item.type === "education"
                      ? "h-full w-full rounded-full bg-zinc-700/70"
                      : "h-full w-full rounded-full bg-accent/60"
                  }
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-normal tracking-[-0.02em] text-white sm:text-xl">
                    {item.role}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.14em] text-zinc-700">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-light text-zinc-400">
                  {item.organization}
                </p>
                <p className="max-w-[560px] text-sm font-light leading-7 text-zinc-400 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
>>>>>>> e53c19f9 (Remove node_modules from repo)
  );
}
