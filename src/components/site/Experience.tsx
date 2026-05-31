import { useReveal } from "@/hooks/use-reveal";

const projects = [
  {
    year: "Phase 01",
    title: "Pre-Construction Support",
    location: "Planning & Tendering",
    scope: "Quote Review · Price Comparison · Contract Analysis",
    body: "Reviewing builder quotations and comparing pricing to identify missing items or hidden costs. We clarify complex contract terminology and help you thoroughly evaluate variations and allowances before ground is even broken.",
  },
  {
    year: "Phase 02",
    title: "During Construction",
    location: "Active Build Oversight",
    scope: "Progress Monitoring · Quality Observations · Cost Guidance",
    body: "Conducting regular project reviews and objective site progress monitoring. We offer independent quality observations, streamline communication channels with your builder, and provide practical guidance on unexpected variations or additional costs.",
  },
  {
    year: "Phase 03",
    title: "Completion Stage",
    location: "Final Closeout",
    scope: "Defects Identification · Snag Lists · Handover Assistance",
    body: "Providing thorough final inspection support and detailed defects identification. We guide you confidently through the practical completion framework and step-by-step handover assistance to ensure the final product meets the high standard promised.",
  },
  {
    year: "Our Edge",
    title: "Independent Advocacy",
    location: "Client-Focused Alignment",
    scope: "Exclusive Homeowner Representation · Objective Advice",
    body: "We work exclusively for homeowners—never builders or contractors. This baseline independence ensures your budget, design intentions, and structural investments remain the single defining priority across every phase of development.",
  },
];

const credentials = [
  "New Homes, Renovations & Extensions",
  "Independent quotation & variation analysis",
  "Objective progress & workmanship monitoring",
  "Meticulous defect identification & handover support",
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
                  Our Approach
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                Protecting your investment.
                <span className="block text-gradient-gold italic">Guiding your build.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
              <p className="text-white/80 leading-relaxed text-lg">
                Whether you are planning a new home, an extensive renovation, or a structural extension, 
                BuildWise Consulting provides independent guidance and practical project oversight to keep 
                your build on track and completely eliminate costly mistakes.
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
            BuildWise Consulting • Independent Advice • Practical Guidance • Better Outcomes
          </p>
        </div>
      </div>
    </section>
  );
}
