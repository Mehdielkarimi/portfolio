import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const projects = [

  {
    title: "Unreal Engine Game Project",
    description:
      "Built a game prototype in Unreal Engine to explore environment design, gameplay systems, and real-time interaction. The project strengthened my understanding of performance, logic flow, and how technical choices shape user experience.",
    stack: ["Unreal Engine", "C++", "Gameplay Systems"],
    year: "2024",
  },
  {
    title: "Offline Tracking for OOH Research",
    description:
      "Worked on research and system design for offline tracking in out-of-home advertising, focusing on how physical exposure could be linked to measurable outcomes.Explored approaches using location data, behavioral signals, and attribution models to bridge the gap between offline impressions and user actions.",
    stack: ["Research", "Analytics", "AdTech"],
    year: "2025",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and built this portfolio as a concise, recruiter-focused site that presents my background, projects, and experience with clarity. The emphasis is on readable structure, minimal design, and polished front-end execution.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
  },
  {
    title: "Facial Recognition Software",
    description:
      "Built a real-time facial recognition system using Python, OpenCV, and DeepFace. The system detects faces from a webcam feed, extracts embeddings, and matches them against a local database for identification. Focused on improving performance by reducing redundant computations and structuring the recognition pipeline for smoother real-time detection.",
    stack: ["Python", "Computer Vision", "Image Processing" , "OpenCV", "DeepFace"],
    year: "2024",
  },
  {
    title: "Weather Prediction in RStudio",
    description:
      "Created a weather prediction project using data analysis and forecasting methods in RStudio. The project centered on interpreting patterns in weather data and turning those patterns into usable projections.",
    stack: ["RStudio", "R", "Data Analysis"],
    year: "2023",
  },
  {
    title: "GhostHunt in Unity",
    description:
      "Built a Unity-based game project focused on interactive gameplay, scene logic, and player feedback loops. It was a practical way to develop scripting discipline while working inside a complete game environment.",
    stack: ["Unity", "C#", "Game Development"],
    year: "2024",
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've worked on.">
      <div className="space-y-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group relative border-t border-white/[0.08] py-10">
              <div className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-24" />
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-normal tracking-[-0.03em] text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="max-w-[560px] text-sm font-light leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-zinc-700">
                  {project.year}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
