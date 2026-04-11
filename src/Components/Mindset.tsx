import { useLanguage } from '../context/LanguageContext'

export default function ArchitectureMindset() {
  const { t } = useLanguage()

  return (
    <section className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400'>
            {t.mindset.label}
          </p>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            {t.mindset.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.mindset.subtitle}
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {t.mindset.items.map((item, index) => (
            <div
              key={item.title}
              className='group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.07]'
            >
              <div className='mb-4 flex items-center justify-between'>
                <span className='text-sm font-bold text-violet-400'>
                  0{index + 1}
                </span>
                <div className='h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_16px_rgba(167,139,250,0.85)]' />
              </div>

              <h3 className='text-lg font-semibold text-white'>{item.title}</h3>

              <p className='mt-3 text-sm leading-6 text-slate-400'>
                {item.desc}
              </p>

              <div className='mt-6 h-px w-full bg-linear-to-r from-violet-500/50 to-transparent' />
            </div>
          ))}
        </div>

        <div className='mt-14 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500'>
          <span>{t.mindset.flow[0]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.mindset.flow[1]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.mindset.flow[2]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.mindset.flow[3]}</span>
        </div>
      </div>
    </section>
  )
}
