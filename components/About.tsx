import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Turning complexity into clarity.">
      <Reveal className="max-w-[580px] space-y-5">
        <p className="text-base font-light leading-8 text-zinc-300 sm:text-lg">
          I&apos;m a Computer Science student at Al Akhawayn University with experience across software engineering, research, and game development.

My work includes research on offline tracking in out-of-home advertising, where I explored how real-world exposure can be connected to measurable user behavior and campaign performance.
I’m particularly interested in building systems that combine backend logic, data processing, and usable interfaces whether that’s marketplace platforms, tracking solutions, or interactive applications.
        </p>
        <p className="text-base font-light leading-8 text-zinc-400 sm:text-lg">
          I&apos;m especially interested in building real-world systems that
          combine clear engineering, usable interfaces, and meaningful data,
          whether that means marketplace platforms, tracking solutions, or
          interactive applications.
        </p>
      </Reveal>
    </Section>
  );
}
