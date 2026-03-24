const examples = [
  {
    title: "Startup Idea",
    input: "I want to build a food delivery app for students",
    output: "Structured MVP plan + architecture + README",
  },
  {
    title: "SaaS Product",
    input: "Platform for managing remote teams and tasks",
    output: "Full product breakdown + scalable system design",
  },
  {
    title: "AI Tool",
    input: "AI that generates marketing content automatically",
    output: "AI pipeline + feature map + tech stack",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Examples
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            See what you can build
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Different types of ideas transformed into structured outputs.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {examples.map((ex) => (
            <div
              key={ex.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              {/* title */}
              <h3 className="text-lg font-semibold text-white mb-4">
                {ex.title}
              </h3>

              {/* input */}
              <div className="mb-4">
                <div className="text-xs uppercase text-slate-500 mb-1">
                  Input
                </div>
                <div className="rounded-lg bg-[#0b1220] p-3 text-sm text-slate-300 border border-white/5">
                  {ex.input}
                </div>
              </div>

              {/* arrow */}
              <div className="text-center text-blue-400 text-sm mb-4">
                ↓
              </div>

              {/* output */}
              <div>
                <div className="text-xs uppercase text-slate-500 mb-1">
                  Output
                </div>
                <div className="rounded-lg bg-[#0b1220] p-3 text-sm text-slate-300 border border-white/5">
                  {ex.output}
                </div>
              </div>

              {/* bottom line */}
              <div className="mt-6 h-px w-full bg-linear-to-r from-blue-500/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Works for startups, products, tools and more
        </div>
      </div>
    </section>
  );
}