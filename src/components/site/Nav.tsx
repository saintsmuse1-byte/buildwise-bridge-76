import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--navy-deep)]/90 backdrop-blur-md py-3 border-b border-[var(--gold)]/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-sm border border-[var(--gold)] flex items-center justify-center font-display text-[var(--gold)] text-lg">
            B
          </span>
          <div className="leading-tight">
            <div className="font-display text-white text-lg tracking-wide">BuildWise</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)]">Consulting</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-white/80 hover:text-[var(--gold)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm uppercase tracking-[0.18em] px-5 py-2 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy-deep)] transition-colors"
          >
            Get in touch
          </a>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[var(--navy-deep)]/95 border-t border-[var(--gold)]/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-white/90 hover:text-[var(--gold)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
