const footerLinks = {
  product: [
    { label: "How it works", href: "#how" },
    { label: "Modes", href: "#modes" },
    { label: "Examples", href: "#examples" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060810] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-sm font-bold text-white">
                PA
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                ProjectArchitect
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Transform raw ideas into structured briefs, architecture, and
              developer-ready documentation with a multi-agent AI workflow.
            </p>
          </div>

          {/* product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Social
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ProjectArchitect. All rights reserved.</p>
          <p>Built for founders, teams, and developers.</p>
        </div>
      </div>
    </footer>
  );
}