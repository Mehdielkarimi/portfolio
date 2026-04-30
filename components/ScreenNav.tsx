"use client";

export type ScreenSection = "about" | "projects" | "experience" | "contact";

export const screenNavItems: Array<{ id: ScreenSection; label: string }> = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

type ScreenNavProps = {
  activeSection: ScreenSection;
  onNavigate: (sectionId: ScreenSection) => void;
  className?: string;
};

export default function ScreenNav({
  activeSection,
  onNavigate,
  className,
}: ScreenNavProps) {
  return (
    <div
      className={`rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-[0_16px_48px_rgba(0,0,0,0.32)] backdrop-blur-xl ${className ?? ""}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        </div>
        <nav aria-label="CRT navigation">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-[0.18em] text-zinc-500 sm:gap-x-6">
            {screenNavItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`relative cursor-pointer transition-colors duration-300 hover:text-accent ${
                      active ? "text-accent" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                        active ? "w-full opacity-100" : "w-0 opacity-60"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
