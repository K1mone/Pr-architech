export default function ProblemSolution() {
  return (
    <section className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            From Problem to Solution
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Most ideas fail not because they are bad — but because they are not
            structured. We fix that.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* PROBLEM */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-lg font-semibold text-red-400">
              🚨 Problem
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Ideas are vague and unstructured</li>
              <li>• No clear architecture or system design</li>
              <li>• Developers waste time clarifying requirements</li>
              <li>• Miscommunication between team members</li>
              <li>• Projects start without proper documentation</li>
            </ul>
          </div>

          {/* SOLUTION */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-lg font-semibold text-blue-400">
              ✅ Solution
            </h3>

            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Convert ideas into structured project briefs</li>
              <li>• Generate clear system architecture</li>
              <li>• Provide ready-to-use technical documentation</li>
              <li>• Align team understanding instantly</li>
              <li>• Start development with confidence</li>
            </ul>
          </div>
        </div>

        {/* arrow / flow */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            <span>Problem</span>
            <span className="text-blue-400">→</span>
            <span>AI Processing</span>
            <span className="text-blue-400">→</span>
            <span>Solution</span>
          </div>
        </div>
      </div>
    </section>
  );
}