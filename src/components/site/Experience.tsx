import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    year: "2021 — 2024",
    title: "Luxury Coastal Residence",
    location: "Ballito, KZN North Coast",
    scope: "R18M new build · 850m² · 14-month programme",
    body: "Full project oversight from architectural sign-off through handover. Managed three subcontractor packages and saved the client over R600k through variation review.",
  },
  {
    year: "2019 — 2021",
    title: "Hilltop Estate Development",
    location: "Hillcrest, KZN Midlands",
    scope: "Cluster of 6 family homes · phased delivery",
    body: "Advised the developer on workmanship standards and snagging across all units. Implemented a weekly inspection cadence that reduced defect rework by 40%.",
  },
  {
    year: "2016 — 2019",
    title: "Heritage Farmhouse Restoration",
    location: "Midlands Meander",
    scope: "Sympathetic renovation · stone & timber",
    body: "Coordinated specialist trades to preserve original character while modernising services. Liaised directly with heritage authorities and the contracted builder.",
  },
  {
    year: "2010 — 2016",
    title: "Senior Site Manager",
    location: "National contractor, Durban",
    scope: "Residential portfolio · 30+ projects",
    body: "Site-level leadership across upmarket residential builds — programme, quality, health & safety, and client liaison.",
  },
];

const credentials = [
  "25+ years in residential construction",
  "Registered Construction Project Manager (SACPCMP)",
  "NHBRC compliance specialist",
  "JBCC & NEC contract literate",
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="relative bg-[var(--navy-deep)] py-28 sm:py-36 text-white overflow-hidden">
      {/* Decorative gold rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="reveal">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold-soft)]">
                  Experience
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                A quarter-century on
                <span className="block text-gradient-gold italic">South African sites.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
              <p className="text-white/80 leading-relaxed text-lg">
                A career built on hard hats, honest reporting, and homes finished to the
                standard they were promised. Selected projects below.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {credentials.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-2 h-1 w-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            {/* Timeline rule */}
            <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-14">
              {projects.map((p) => (
                <div key={p.title} className="grid md:grid-cols-4 gap-6 md:gap-10 relative">
                  <div className="md:col-span-1 pl-6 md:pl-0 relative">
                    <span className="absolute left-0 md:left-auto md:right-[calc(0%-1px-12px)] top-2 h-2 w-2 rounded-full bg-[var(--gold)] -translate-x-1/2 md:translate-x-0" />
                    <div className="text-[var(--gold)] font-display text-xl">{p.year}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/50 mt-2">
                      {p.location}
                    </div>
                  </div>
                  <div className="md:col-span-3 pl-6 md:pl-10 border-l border-white/10 md:border-l-0">
                    <h3 className="font-display text-2xl sm:text-3xl mb-2">{p.title}</h3>
                    <div className="text-sm text-[var(--gold-soft)] mb-4 tracking-wide">
                      {p.scope}
                    </div>
                    <p className="text-white/75 leading-relaxed max-w-2xl">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-16 text-xs uppercase tracking-[0.3em] text-white/40 text-center">
            Placeholder content — edit with your verified project history
          </p>
        </div>
      </div>
    </section>
  );
}
