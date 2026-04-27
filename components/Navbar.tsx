"use client";

const items = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-[900px] rounded-full border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-xl">
        <nav aria-label="Primary navigation">
          <ul className="flex items-center justify-between gap-2 overflow-x-auto text-sm text-zinc-400">
            {items.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-2 transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
