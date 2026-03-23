export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060810] pt-32 pb-24 text-white">
      {/* background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,140,255,0.18),transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.14),transparent_30%)]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center md:px-8">
        {/* pipe */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md md:text-sm">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span>Idea</span>
          <span className="text-slate-500">→</span>
          <span className="font-mono text-cyan-300">project_brief.json</span>
          <span className="text-slate-500">→</span>
          <span>architecture</span>
          <span className="text-slate-500">→</span>
          <span className="font-mono text-violet-300">README.md</span>
        </div>

        {/* title */}
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          <span>Turn Raw Ideas into</span>
          <br />
          <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Production-Ready Architecture
          </span>
        </h1>

        {/* subtitle */}
        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg">
          Multi-agent AI system that transforms product ideas into structured
          briefs, architecture drafts and engineering-ready README files — with
          iterative validation and zero hallucination padding.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:opacity-95 hover:shadow-lg hover:shadow-blue-500/30">
            Generate README (Demo)
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
            View example output
          </button>
        </div>
      </div>
    </section>
  );
}