import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  {
    title: "Quotation & Variation Review",
    body: "Every line item scrutinised so you know exactly what you're paying for — and why.",
  },
  {
    title: "On-Site Workmanship Monitoring",
    body: "Regular site visits and inspections to ensure quality standards are upheld throughout the build.",
  },
  {
    title: "Practical, Experienced Guidance",
    body: "Decades of hands-on construction insight, translated into clear advice you can act on.",
  },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative bg-[var(--ivory)] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="reveal grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-xs uppercase tracking-[0.35em] text-[var(--navy-soft)]">About</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--navy-deep)] leading-tight">
              Meet James Robinson
            </h2>
            <p className="mt-3 text-[var(--gold)] text-sm uppercase tracking-[0.25em]">
              Principal Consultant
            </p>

            <div className="mt-10 aspect-[4/5] w-full bg-gradient-to-br from-[var(--navy)] to-[var(--navy-deep)] relative overflow-hidden">
              <div className="absolute inset-4 border border-[var(--gold)]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[var(--gold-soft)] text-8xl opacity-60">JR</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Portrait placeholder
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            <p className="text-xl text-[var(--navy)] leading-relaxed font-light">
              James Robinson is an experienced construction and business professional with a strong 
              background in managing complex projects, financial oversight, and high-pressure negotiations. 
              Over many years working within demanding corporate environments, he has developed the 
              interpersonal and problem-solving skills needed to manage difficult situations calmly and effectively.
            </p>
            <p className="mt-6 text-base text-[var(--navy-soft)] leading-relaxed">
              As founder of BuildWise Consulting, James provides independent homeowner-side support 
              the building journey. His role is to help bridge the gap between builder and client by 
              offering practical guidance on budgeting, quotations, variations, communication, and overall 
              project oversight.
            </p>
            <p className="mt-6 text-base text-[var(--navy-soft)] leading-relaxed">
              Combining commercial experience with real-world construction knowledge, James helps homeowners 
              avoid unnecessary stress and costly mistakes, providing confidence and peace of mind during 
              one of the biggest investments they will ever make.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className="border-t border-[var(--gold)] pt-5 group"
                >
                  <div className="text-[var(--gold)] font-display text-2xl mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-lg text-[var(--navy-deep)] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[var(--navy-soft)] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
