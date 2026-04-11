import { useLanguage } from '../context/LanguageContext'

export default function Advantages() {
  const { t } = useLanguage()

  return (
    <section className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400'>
            {t.advantages.label}
          </p>
          <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
            {t.advantages.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.advantages.subtitle}
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {t.advantages.items.map((item) => (
            <div
              key={item.title}
              className='group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]'
            >
              <h3 className='mb-2 text-lg font-semibold text-white'>
                {item.title}
              </h3>

              <p className='text-sm leading-6 text-slate-400'>{item.desc}</p>

              <div className='mt-6 h-px w-full bg-linear-to-r from-green-500/40 to-transparent' />
            </div>
          ))}
        </div>

        <div className='mt-12 text-center text-sm text-slate-500'>
          {t.advantages.bottom}
        </div>
      </div>
    </section>
  )
}
