import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What does the platform actually generate?",
    answer:
      "It turns raw product ideas into structured briefs, architecture drafts, and developer-ready documentation.",
  },
  {
    question: "Is this only for startups?",
    answer:
      "No. It works for startups, internal tools, SaaS products, MVPs, and larger systems that need clear planning.",
  },
  {
    question: "Do I need technical knowledge to use it?",
    answer:
      "No. You can describe your idea in simple language, and the system will convert it into structured technical output.",
  },
  {
    question: "Can developers use the output directly?",
    answer:
      "Yes. The goal is to produce documentation that is clear enough for product and engineering teams to use as a starting point.",
  },
  {
    question: "How is this different from a normal AI chat?",
    answer:
      "Instead of giving loose answers, the system follows structured roles and workflow logic to produce more consistent results.",
  },
  {
    question: "Can I refine the result later?",
    answer:
      "Yes. You can iterate on the idea, improve the brief, and adjust architecture direction as the product evolves.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative bg-[#060810] py-24 text-white">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-sm text-slate-400 sm:text-base">
            Clear answers to the most common questions about the platform.
          </p>
        </div>

        {/* faq list */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/4 sm:px-6"
                >
                  <span className="text-sm font-medium text-white sm:text-base">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-blue-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-400 sm:px-6">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="mt-10 text-center text-sm text-slate-500">
          Still have questions? The platform is designed to be simple on the surface and powerful underneath.
        </div>
      </div>
    </section>
  );
}