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
    type: "education",
  },
];

export default function Experience() {
  return (
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
  );
}
