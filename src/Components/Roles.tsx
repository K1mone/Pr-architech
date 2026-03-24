const agents = [
  {
    name: "Idea Parser",
    role: "Understands input",
    desc: "Analyzes raw user input and extracts key intent, goals and constraints.",
  },
  {
    name: "Product Architect",
    role: "Builds structure",
    desc: "Transforms the idea into a structured product brief and defines core features.",
  },
  {
    name: "System Designer",
    role: "Designs architecture",
    desc: "Creates system components, data flow and technical architecture.",
  },
  {
    name: "Tech Lead AI",
    role: "Validates decisions",
    desc: "Checks architecture consistency, stack choices and scalability risks.",
  },
  {
    name: "Documentation Agent",
    role: "Generates output",
    desc: "Produces a clean README and technical documentation for developers.",
  },
];

export default function MultiAgentRoles() {
  return (
    <section className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Multi-agent system
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Specialized AI roles working together
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Each agent has a clear responsibility — just like a real product
            team. Together they transform your idea into a production-ready result.
          </p>
        </div>

        {/* agents grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, index) => (
            <div
              key={agent.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.07]"
            >
              {/* number */}
              <div className="mb-4 text-sm font-bold text-violet-400">
                0{index + 1}
              </div>

              {/* name */}
              <h3 className="text-lg font-semibold text-white">
                {agent.name}
              </h3>

              {/* role */}
              <div className="mt-1 text-xs text-slate-500 uppercase tracking-wide">
                {agent.role}
              </div>

              {/* description */}
              <p className="mt-3 text-sm text-slate-400 leading-6">
                {agent.desc}
              </p>

              {/* glow line */}
              <div className="mt-6 h-px w-full bg-linear-to-r from-violet-500/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* bottom flow */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <span>Idea</span>
          <span className="text-violet-400">→</span>
          <span>Parsing</span>
          <span className="text-violet-400">→</span>
          <span>Architecture</span>
          <span className="text-violet-400">→</span>
          <span>Validation</span>
          <span className="text-violet-400">→</span>
          <span>Documentation</span>
        </div>
      </div>
    </section>
  );
}