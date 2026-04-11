import { useLanguage } from '../context/LanguageContext'

export default function Modes() {
  const { t } = useLanguage()

  return (
    <section id='modes' className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400'>
            {t.modes.label}
          </p>
          <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
            {t.modes.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.modes.subtitle}
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {t.modes.cards.map((mode) => (
            <div
              key={mode.name}
              className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]'
            >
              <h3
                className={`mb-2 text-lg font-semibold ${
                  mode.color === 'blue'
                    ? 'text-blue-400'
                    : mode.color === 'violet'
                      ? 'text-violet-400'
                      : 'text-green-400'
                }`}
              >
                {mode.name}
              </h3>

              <p className='mb-4 text-sm text-slate-400'>{mode.desc}</p>

              <ul className='space-y-2 text-sm text-slate-300'>
                {mode.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>

              <div
                className={`mt-6 h-px w-full ${
                  mode.color === 'blue'
                    ? 'bg-linear-to-r from-blue-500/40 to-transparent'
                    : mode.color === 'violet'
                      ? 'bg-linear-to-r from-violet-500/40 to-transparent'
                      : 'bg-linear-to-r from-green-500/40 to-transparent'
                }`}
              />
            </div>
          ))}
        </div>

        <div className='mt-12 text-center text-sm text-slate-500'>
          {t.modes.bottom}
        </div>
      </div>
    </section>
  )
}
