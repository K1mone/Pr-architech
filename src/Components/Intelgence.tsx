const techItems = [
  {
    title: "Stack reasoning",
    desc: "Suggests a fitting technology stack based on product goals, complexity, and expected scale.",
  },
  {
    title: "Architecture awareness",
    desc: "Identifies core system parts, service boundaries, and the logic behind component interaction.",
  },
  {
    title: "Scalability thinking",
    desc: "Considers future growth, load, maintainability, and expansion before development starts.",
  },
  {
    title: "Risk detection",
    desc: "Highlights possible weak points, bottlenecks, and unclear requirements early in the process.",
  },
  {
    title: "Documentation quality",
    desc: "Transforms technical decisions into structured output your team can read and use immediately.",
  },
  {
    title: "Decision consistency",
    desc: "Keeps product logic, architecture choices, and implementation direction aligned across the workflow.",
  },
];

export default function TechIntelligence() {
  return (
    <section className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Tech Intelligence
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            More than generation — informed technical thinking
          </h2>
          <p className="mt-4 text-sm text-slate-400 sm:text-base">
            The system does not just format ideas. It analyzes technical direction,
            validates logic, and helps shape decisions before development begins.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techItems.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-cyan-400">
                  0{index + 1}
                </span>
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.desc}
              </p>

              <div className="mt-6 h-px w-full bg-linear-to-r from-cyan-500/50 to-transparent" />
            </div>
          ))}
        </div>

        {/* bottom strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
          <span>Input</span>
          <span className="text-cyan-400">→</span>
          <span>Analysis</span>
          <span className="text-cyan-400">→</span>
          <span>Technical Decisions</span>
          <span className="text-cyan-400">→</span>
          <span>Reliable Output</span>
        </div>
      </div>
    </section>
  );
}