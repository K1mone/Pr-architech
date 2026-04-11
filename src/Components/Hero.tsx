import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className='relative overflow-hidden bg-[#060810] pt-32 pb-24 text-white'>
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,140,255,0.18),transparent_35%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.14),transparent_30%)]' />
      </div>

      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] opacity-20' />

      <div className='relative mx-auto flex max-w-7xl flex-col items-center px-4 text-center md:px-8'>
        <div className='mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-md md:text-sm'>
          <span className='h-2 w-2 rounded-full bg-cyan-400' />
          <span>{t.hero.badge[0]}</span>
          <span className='text-slate-500'>→</span>
          <span className='font-mono text-cyan-300'>{t.hero.badge[1]}</span>
          <span className='text-slate-500'>→</span>
          <span>{t.hero.badge[2]}</span>
          <span className='text-slate-500'>→</span>
          <span className='font-mono text-violet-300'>{t.hero.badge[3]}</span>
        </div>

        <h1 className='max-w-5xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl'>
          <span>{t.hero.title}</span>
          <br />
          <span className='bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent'>
            {t.hero.highlight}
          </span>
        </h1>

        <p className='mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg'>
          {t.hero.subtitle}
        </p>

        <div className='mt-10 flex flex-col items-center gap-4 sm:flex-row'>
          <a
            href='https://github.com/Alexloroo/Agent_Project_Architect'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:opacity-95 hover:shadow-lg hover:shadow-blue-500/30'
          >
            {t.hero.github}
          </a>

          <a
            href='https://www.linkedin.com/in/alexloroo/'
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10'
          >
            {t.hero.linkedin}
          </a>
        </div>
      </div>
    </section>
  )
}
