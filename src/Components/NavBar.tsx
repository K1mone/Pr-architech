import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Modes", href: "#modes" },
  { label: "Examples", href: "#examples" },
  { label: "FAQ", href: "#faq" },
];

const languages = [
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "RU", label: "Русский", flag: "🇷🇺" },
  { code: "ZH", label: "中文", flag: "🇨🇳" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const langRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#060810]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-15.5 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-xs font-bold text-white">
            PA
          </div>
          <span className="text-[17px] font-extrabold tracking-tight text-white">
            ProjectArchitect
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language dropdown */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.code}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 min-w-37.5 overflow-hidden rounded-xl border border-white/10 bg-[#161928] shadow-2xl">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition hover:bg-white/5 ${
                      currentLang.code === lang.code
                        ? "text-blue-400"
                        : "text-slate-300"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/30">
            Try Demo
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white transition hover:bg-white/5 md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#060810] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => setCurrentLang(lang)}
                    className={`rounded-lg border px-3 py-2 text-sm transition ${
                      currentLang.code === lang.code
                        ? "border-blue-500 bg-blue-500/10 text-blue-400"
                        : "border-white/10 bg-slate-900 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {lang.flag} {lang.code}
                  </button>
                ))}
              </div>

              <button className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}