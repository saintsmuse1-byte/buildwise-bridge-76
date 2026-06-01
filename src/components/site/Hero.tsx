import heroVideo from "@/assets/hero.mp4";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[var(--navy-deep)]">
      {/* Aerial countryside estate video */}
      <video
        className="absolute inset-0 h-full w-full object-cover bg-[var(--navy-deep)]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlays — keep video visible, darken behind text only */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)]/75 via-[var(--navy-deep)]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--navy-deep)]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 min-h-screen flex flex-col justify-center pt-24 pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--gold-soft)]">
              Building Project Management
            </span>
          </div>

          <h1 className="font-display text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Your trusted bridge between
            <span className="block text-gradient-gold italic">homeowner & builder.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            BuildWise Consulting protects your interests at every stage of construction —
            from reviewing quotations and variations to monitoring workmanship with
            seasoned, practical guidance.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[var(--gold)] text-[var(--navy-deep)] font-medium tracking-wide uppercase text-sm hover:bg-[var(--gold-soft)] transition-colors"
            >
              Discuss your project
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-wide hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
            >
              How I work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </div>
    </section>
  );
}
