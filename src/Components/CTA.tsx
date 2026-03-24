export default function CTA() {
  return (
    <section className="relative bg-[#060810] py-24 text-white">
      {/* glow background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        {/* title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Turn your idea into a real product
        </h2>

        {/* subtitle */}
        <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
          Stop guessing, stop overthinking. Get a clear structure, architecture,
          and documentation in seconds.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-500 px-8 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:opacity-95 hover:shadow-lg hover:shadow-blue-500/30">
            Generate README
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
            View demo
          </button>
        </div>

        {/* trust line */}
        <div className="mt-10 text-sm text-slate-500">
          No setup required • Works instantly • Built for real products
        </div>
      </div>
    </section>
  );
}