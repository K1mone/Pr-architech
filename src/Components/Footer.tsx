import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const productLinks = [
    { label: t.footer.productLinks[0], targetId: 'how' },
    { label: t.footer.productLinks[1], targetId: 'modes' },
    { label: t.footer.productLinks[2], targetId: 'examples' },
    { label: t.footer.productLinks[3], targetId: 'faq' },
  ]

  const companyLinks = t.footer.companyLinks.map((label) => ({ label, href: '#' }))
  const socialLinks = t.footer.socialLinks.map((label) => ({ label, href: '#' }))

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className='border-t border-white/10 bg-[#060810] text-white'>
      <div className='mx-auto max-w-7xl px-4 py-14 md:px-8'>
        <div className='grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]'>
          <div>
            <button
              type='button'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='flex items-center gap-2'
            >
              <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-violet-500 text-sm font-bold text-white'>
                PA
              </div>
              <span className='text-lg font-extrabold tracking-tight'>
                ProjectArchitect
              </span>
            </button>

            <p className='mt-4 max-w-sm text-sm leading-6 text-slate-400'>
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-300'>
              {t.footer.product}
            </h3>
            <ul className='mt-4 space-y-3'>
              {productLinks.map((link) => (
                <li key={link.targetId}>
                  <button
                    type='button'
                    onClick={() => scrollToSection(link.targetId)}
                    className='text-sm text-slate-400 transition hover:text-white'
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-300'>
              {t.footer.company}
            </h3>
            <ul className='mt-4 space-y-3'>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className='text-sm text-slate-400 transition hover:text-white'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.18em] text-slate-300'>
              {t.footer.social}
            </h3>
            <ul className='mt-4 space-y-3'>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className='text-sm text-slate-400 transition hover:text-white'>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between'>
          <p>{t.footer.copyright}</p>
          <p>{t.footer.bottom}</p>
        </div>
      </div>
    </footer>
  )
}
