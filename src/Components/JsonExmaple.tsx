export default function JsonExample() {
  const jsonExample = `{
  "project": "AI SaaS Platform",
  "goal": "Convert raw ideas into structured architecture",
  "features": [
    "Idea parsing",
    "Architecture generation",
    "README creation"
  ],
  "tech_stack": {
    "frontend": "React + Tailwind",
    "backend": "Node.js",
    "ai": "LLM multi-agent system"
  },
  "output": "Production-ready documentation"
}`;

  return (
    <section className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Example Output
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            This is what your idea becomes after processing — clean,
            structured and ready for development.
          </p>
        </div>

        {/* content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* LEFT: explanation */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4">
              From chaos → structured data
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Clear project definition</li>
              <li>• Structured feature list</li>
              <li>• Defined tech stack</li>
              <li>• Ready-to-use documentation</li>
            </ul>

            <div className="mt-6 text-sm text-slate-500">
              No ambiguity. No missing pieces. Just clean output.
            </div>
          </div>

          {/* RIGHT: code block */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0b1220] p-6 font-mono text-sm overflow-hidden">
            {/* fake header */}
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <pre className="overflow-x-auto text-slate-300">
              <code>{jsonExample}</code>
            </pre>

            {/* glow */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-violet-500/10" />
          </div>
        </div>

        {/* bottom note */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Generated automatically in seconds
        </div>
      </div>
    </section>
  );
}