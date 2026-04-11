import { useLanguage } from '../context/LanguageContext'

export default function TechIntelligence() {
  const { t } = useLanguage()

  return (
    <section className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400'>
            {t.intelligence.label}
          </p>
          <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
            {t.intelligence.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.intelligence.subtitle}
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {t.intelligence.items.map((item, index) => (
            <div
              key={item.title}
              className='group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.07]'
            >
              <div className='mb-4 flex items-center justify-between'>
                <span className='text-sm font-bold text-cyan-400'>
                  0{index + 1}
                </span>
                <div className='h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]' />
              </div>

              <h3 className='text-lg font-semibold text-white'>{item.title}</h3>

              <p className='mt-3 text-sm leading-6 text-slate-400'>
                {item.desc}
              </p>

              <div className='mt-6 h-px w-full bg-linear-to-r from-cyan-500/50 to-transparent' />
            </div>
          ))}
        </div>

        <div className='mt-14 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500'>
          <span>{t.intelligence.flow[0]}</span>
          <span className='text-cyan-400'>→</span>
          <span>{t.intelligence.flow[1]}</span>
          <span className='text-cyan-400'>→</span>
          <span>{t.intelligence.flow[2]}</span>
          <span className='text-cyan-400'>→</span>
          <span>{t.intelligence.flow[3]}</span>
        </div>
      </div>
    </section>
  )
}
