const advantages = [
  {
    title: "Save time",
    desc: "Reduce hours of planning and discussions to seconds of structured output.",
  },
  {
    title: "Clarity from the start",
    desc: "No vague ideas — everything is structured and ready to use immediately.",
  },
  {
    title: "Production-ready output",
    desc: "Generate documentation your developers can start working with instantly.",
  },
  {
    title: "Consistent decisions",
    desc: "Architecture and tech stack are aligned and logically validated.",
  },
  {
    title: "Scalable approach",
    desc: "Works for MVPs, startups and full-scale products.",
  },
  {
    title: "No communication gaps",
    desc: "Everyone on the team understands the same structure and goals.",
  },
];

export default function Advantages() {
  return (
    <section className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Advantages
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Why this approach works
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Built to remove chaos, reduce friction and accelerate development.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              {/* title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* description */}
              <p className="text-sm text-slate-400 leading-6">
                {item.desc}
              </p>

              {/* line */}
              <div className="mt-6 h-px w-full bg-linear-to-r from-green-500/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* bottom highlight */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Designed for speed, clarity and real-world development
        </div>
      </div>
    </section>
  );
}