import { useReveal } from "@/hooks/use-reveal";

const details = [
  {
    label: "Email",
    value: "james.angus.robinson@gmail.com",
    href: "mailto:james.angus.robinson@gmail.com",
  },
  {
    label: "Phone",
    value: "+27 61 592 717",
    href: "tel:+2761592717",
  },
  {
    label: "Service Area",
    value: "KwaZulu-Natal, South Africa",
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative bg-[var(--ivory)] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={ref} className="reveal text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--navy-soft)]">
              Contact
            </span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-[var(--navy-deep)] leading-tight max-w-3xl mx-auto">
            Planning a build? Let's talk before you sign.
          </h2>
          <p className="mt-6 text-lg text-[var(--navy-soft)] max-w-2xl mx-auto leading-relaxed">
            Whether you're at concept stage or already mid-project, an honest
            conversation costs nothing and could save you a great deal.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--gold)]/30 border border-[var(--gold)]/30">
          {details.map((d) => (
            <div key={d.label} className="bg-[var(--ivory)] p-10 text-center">
              <div className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)] mb-3">
                {d.label}
              </div>
              {d.href ? (
                <a
                  href={d.href}
                  className="font-display text-xl sm:text-2xl text-[var(--navy-deep)] hover:text-[var(--gold)] transition-colors break-words"
                >
                  {d.value}
                </a>
              ) : (
                <div className="font-display text-xl sm:text-2xl text-[var(--navy-deep)]">
                  {d.value}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="mailto:james.angus.robinson@gmail.com"
            className="inline-block px-10 py-5 bg-[var(--navy-deep)] text-[var(--gold)] uppercase tracking-[0.2em] text-sm hover:bg-[var(--navy)] transition-colors"
          >
            Send an enquiry
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/60 py-10 border-t border-[var(--gold)]/20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-sm border border-[var(--gold)] flex items-center justify-center font-display text-[var(--gold)]">
            B
          </span>
          <span className="font-display text-white">BuildWise Consulting</span>
        </div>
        <p className="text-xs uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} James Robinson · KwaZulu-Natal
        </p>
      </div>
    </footer>
  );
}
