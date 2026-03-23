const steps = [
  {
    number: "01",
    title: "Input the idea",
    description:
      "User describes the product, startup, feature, or business idea in plain language.",
  },
  {
    number: "02",
    title: "AI structures the brief",
    description:
      "The system transforms raw input into a clear project brief with goals, scope, and key requirements.",
  },
  {
    number: "03",
    title: "Architecture is generated",
    description:
      "The platform builds a logical system design, defining components, flows, and technical direction.",
  },
  {
    number: "04",
    title: "README becomes ready",
    description:
      "A production-ready document is created so the team can start building without confusion.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple flow from idea to execution
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            The system guides every step of the process — from an unstructured
            idea to a clean technical output your team can use immediately.
          </p>
        </div>

        {/* steps */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-4xl font-extrabold tracking-tight text-white/10 transition group-hover:text-blue-400/20">
                  {step.number}
                </span>
                <div className="h-10 w-10 rounded-full border border-white/10 bg-[#0b1220] flex items-center justify-center text-sm font-bold text-blue-400">
                  {step.number}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {step.description}
              </p>

              <div className="mt-6 h-px w-full bg-linear-to-r from-blue-500/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* bottom flow */}
        <div className="mt-14 hidden items-center justify-center gap-3 text-sm text-slate-500 md:flex">
          <span>Idea</span>
          <span className="text-blue-400">→</span>
          <span>Brief</span>
          <span className="text-blue-400">→</span>
          <span>Architecture</span>
          <span className="text-blue-400">→</span>
          <span>README</span>
        </div>
      </div>
    </section>
  );
}