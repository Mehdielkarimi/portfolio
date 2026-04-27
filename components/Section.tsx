import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[760px] space-y-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            {eyebrow}
          </p>
          <h2 className="max-w-[12ch] text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
