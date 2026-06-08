import { useReveal } from "@/hooks/use-reveal";

const phases = [
  {
    phase: "Phase 01",
    title: "Project Foundation",
    subtitle: "Define scope, budget and risk early",
    highlights: "Scope validation · Budget clarity · Contract review",
    description:
      "We establish a strong project foundation by reviewing tender packages, builder quotations and contract terms. Early scope validation reduces hidden costs and gives you the confidence to proceed with the right builder.",
  },
  {
    phase: "Phase 02",
    title: "Pre-Construction Planning",
    subtitle: "Align design, pricing and approvals",
    highlights: "Quote analysis · Variation management · Design coordination",
    description:
      "We validate allowances, compare pricing and confirm deliverables before work begins. This phase makes sure your design intent, finishes and structural scope are locked in ahead of construction.",
  },
  {
    phase: "Phase 03",
    title: "Construction Oversight",
    subtitle: "Monitor progress with independent insight",
    highlights: "Site reviews · Quality assessment · Cost guidance",
    description:
      "During the build we provide objective progress monitoring, identify workmanship issues and advise on variations. Your project stays on track without relying only on builder reporting.",
  },
  {
    phase: "Phase 04",
    title: "Completion & Handover",
    subtitle: "Capture defects and close with confidence",
    highlights: "Snag lists · Practical completion review · Handover support",
    description:
      "At practical completion we inspect the finished work, document defects and guide your handover process. The result is a cleaner handover and a stronger outcome for your investment.",
  },
];

const coreBenefits = [
  "Independent homeowner advocacy",
  "Clear cost and scope validation",
  "Objective progress and quality oversight",
  "Practical completion support and handover clarity",
];

export function Experience() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative bg-[var(--navy-deep)] py-28 sm:py-36 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />

      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className="reveal">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[var(--gold)]" />
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold-soft)]">
                  BuildWise Lifecycle
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                Navigate every stage of your build.
                <span className="block text-gradient-gold italic">From planning to practical completion.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
              <p className="text-white/80 leading-relaxed text-lg">
                BuildWise provides independent guidance across the full project lifecycle so you can avoid costly surprises, manage variations, and achieve a smooth handover.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {coreBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-2 h-1 w-1 rounded-full bg-[var(--gold)] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-14">
              {phases.map((phase) => (
                <div key={phase.title} className="grid md:grid-cols-4 gap-6 md:gap-10 relative">
                  <div className="md:col-span-1 pl-6 md:pl-0 relative">
                    <span className="absolute left-0 md:left-auto md:right-[calc(0%-1px-12px)] top-2 h-2 w-2 rounded-full bg-[var(--gold)] -translate-x-1/2 md:translate-x-0" />
                    <div className="text-[var(--gold)] font-display text-xl">{phase.phase}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-white/50 mt-2">
                      {phase.subtitle}
                    </div>
                  </div>
                  <div className="md:col-span-3 pl-6 md:pl-10 border-l border-white/10 md:border-l-0">
                    <h3 className="font-display text-2xl sm:text-3xl mb-2">{phase.title}</h3>
                    <div className="text-sm text-[var(--gold-soft)] mb-4 tracking-wide">
                      {phase.highlights}
                    </div>
                    <p className="text-white/75 leading-relaxed max-w-2xl">{phase.description}</p>
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
