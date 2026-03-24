const modes = [
  {
    name: "Quick Mode",
    desc: "Fast generation of project structure and README in seconds.",
    features: [
      "Minimal input",
      "Instant output",
      "Best for MVP ideas",
    ],
    color: "blue",
  },
  {
    name: "Deep Mode",
    desc: "Full analysis with detailed architecture and validation.",
    features: [
      "Detailed breakdown",
      "Architecture decisions",
      "Risk validation",
    ],
    color: "violet",
  },
  {
    name: "Team Mode",
    desc: "Collaborative workflow for teams and product development.",
    features: [
      "Shared understanding",
      "Aligned documentation",
      "Team-ready output",
    ],
    color: "green",
  },
];

export default function Modes() {
  return (
    <section id="modes" className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Modes
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Choose how deep you want to go
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Different workflows for different stages — from quick ideas to
            production-ready systems.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {modes.map((mode) => (
            <div
              key={mode.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              {/* title */}
              <h3
                className={`text-lg font-semibold mb-2 ${
                  mode.color === "blue"
                    ? "text-blue-400"
                    : mode.color === "violet"
                    ? "text-violet-400"
                    : "text-green-400"
                }`}
              >
                {mode.name}
              </h3>

              {/* description */}
              <p className="text-sm text-slate-400 mb-4">
                {mode.desc}
              </p>

              {/* features */}
              <ul className="space-y-2 text-sm text-slate-300">
                {mode.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              {/* bottom line */}
              <div
                className={`mt-6 h-px w-full ${
                  mode.color === "blue"
                    ? "bg-linear-to-r from-blue-500/40 to-transparent"
                    : mode.color === "violet"
                    ? "bg-linear-to-r from-violet-500/40 to-transparent"
                    : "bg-linear-to-r from-green-500/40 to-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* bottom hint */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Switch modes anytime depending on your workflow
        </div>
      </div>
    </section>
  );
}