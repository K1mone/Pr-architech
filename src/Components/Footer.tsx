import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const productLinks = [
    { label: t.footer.productLinks[0], targetId: 'how' },
    { label: t.footer.productLinks[1], targetId: 'modes' },
    { label: t.footer.productLinks[2], targetId: 'examples' },
    { label: t.footer.productLinks[3], targetId: 'faq' },
  ]

  const socialLinks = [
    {
      label: t.footer.socialLinks[1],
      href: 'https://github.com/Alexloroo/Agent_Project_Architect',
    },
    {
      label: t.footer.socialLinks[2],
      href: 'https://www.linkedin.com/in/alexloroo/',
    },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className='relative overflow-hidden border-t border-white/10 bg-[#060810] text-white'>
      <div className='absolute inset-0 opacity-40'>
        <div className='absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl' />
        <div className='absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 py-16 md:px-8'>
        <div className='rounded-3xl border border-white/10 bg-white/4 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-10'>
          <div className='grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12'>
            <div>
              <button
                type='button'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='inline-flex items-center gap-3'
              >
                <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-violet-500 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20'>
                  PA
                </div>

                <div className='text-left'>
                  <div className='text-lg font-extrabold tracking-tight text-white'>
                    ProjectArchitect
                  </div>
                  <div className='text-xs uppercase tracking-[0.22em] text-slate-500'>
                    AI Architecture System
                  </div>
                </div>
              </button>

              <p className='mt-5 max-w-md text-sm leading-7 text-slate-400'>
                {t.footer.description}
              </p>
            </div>

            <div>
              <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-300'>
                {t.footer.product}
              </h3>

              <ul className='mt-5 space-y-3'>
                {productLinks.map((link) => (
                  <li key={link.targetId}>
                    <button
                      type='button'
                      onClick={() => scrollToSection(link.targetId)}
                      className='group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white'
                    >
                      <span className='h-1.5 w-1.5 rounded-full bg-blue-400/70 transition group-hover:bg-blue-400' />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col justify-between'>
              <div>
                <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-300'>
                  {t.footer.social}
                </h3>

                <div className='mt-5 space-y-3'>
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1220]/80 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/8 hover:text-white'
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} className='text-slate-500' />
                    </a>
                  ))}
                </div>
              </div>

              <button
                type='button'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white'
              >
                Back to top
              </button>
            </div>
          </div>

          <div className='mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
            <p>{t.footer.copyright}</p>
            <p>{t.footer.bottom}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
