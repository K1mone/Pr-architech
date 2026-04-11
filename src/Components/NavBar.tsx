import { useEffect, useMemo, useRef, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const languages = [
  { code: 'en', label: 'English', flag: `${import.meta.env.BASE_URL}flags/gb.png` },
  { code: 'ru', label: 'Русский', flag: `${import.meta.env.BASE_URL}flags/ru.png` },
  { code: 'zh', label: '中文', flag: `${import.meta.env.BASE_URL}flags/cn.png` },
] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const langRef = useRef<HTMLDivElement | null>(null)

  const currentLang = useMemo(
    () => languages.find((item) => item.code === lang) ?? languages[0],
    [lang]
  )

  const navLinks = useMemo(
    () => [
      { label: t.nav.how, targetId: 'how' },
      { label: t.nav.modes, targetId: 'modes' },
      { label: t.nav.examples, targetId: 'examples' },
      { label: t.nav.faq, targetId: 'faq' },
    ],
    [t]
  )

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#060810]/80 backdrop-blur-xl'>
      <div className='mx-auto flex h-15.5 max-w-7xl items-center justify-between px-4 md:px-8'>
        <button
          type='button'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='flex items-center gap-2'
        >
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-xs font-bold text-white'>
            PA
          </div>
          <span className='text-[17px] font-extrabold tracking-tight text-white'>
            ProjectArchitect
          </span>
        </button>

        <ul className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <li key={link.targetId}>
              <button
                type='button'
                onClick={() => scrollToSection(link.targetId)}
                className='text-sm font-medium text-slate-400 transition hover:text-white'
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className='hidden items-center gap-3 md:flex'>
          <div className='relative' ref={langRef}>
            <button
              type='button'
              onClick={() => setLangOpen((prev) => !prev)}
              className='flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white'
            >
              <img
                src={currentLang.flag}
                alt={currentLang.label}
                className='h-4 w-5 rounded-[2px] object-cover'
                loading='lazy'
                draggable='false'
              />
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${langOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {langOpen && (
              <div className='absolute right-0 mt-2 min-w-37.5 overflow-hidden rounded-xl border border-white/10 bg-[#161928] shadow-2xl'>
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type='button'
                    onClick={() => {
                      setLang(item.code)
                      setLangOpen(false)
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition hover:bg-white/5 ${
                      lang === item.code ? 'text-blue-400' : 'text-slate-300'
                    }`}
                  >
                    <img
                      src={item.flag}
                      alt={item.label}
                      className='h-4 w-5 rounded-[2px] object-cover'
                      loading='lazy'
                      draggable='false'
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          type='button'
          onClick={() => setMobileOpen((prev) => !prev)}
          className='rounded-lg p-2 text-white transition hover:bg-white/5 md:hidden'
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className='border-t border-white/10 bg-[#060810] md:hidden'>
          <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4'>
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                type='button'
                onClick={() => {
                  scrollToSection(link.targetId)
                  setMobileOpen(false)
                }}
                className='text-left text-sm font-medium text-slate-300 transition hover:text-white'
              >
                {link.label}
              </button>
            ))}

            <div className='mt-2 flex flex-col gap-2'>
              <div className='flex flex-wrap gap-2'>
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type='button'
                    onClick={() => setLang(item.code)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                      lang === item.code
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                        : 'border-white/10 bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <img
                      src={item.flag}
                      alt={item.label}
                      className='h-4 w-5 rounded-[2px] object-cover'
                      loading='lazy'
                      draggable='false'
                    />
                    <span>{item.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}