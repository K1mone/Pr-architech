import { useLanguage } from '../context/LanguageContext'

export default function Examples() {
  const { t } = useLanguage()

  return (
    <section id='examples' className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400'>
            {t.examples.label}
          </p>
          <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
            {t.examples.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.examples.subtitle}
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          {t.examples.cards.map((example) => (
            <div
              key={example.title}
              className='group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]'
            >
              <h3 className='mb-4 text-lg font-semibold text-white'>
                {example.title}
              </h3>

              <div className='mb-4'>
                <div className='mb-1 text-xs uppercase text-slate-500'>
                  {t.examples.input}
                </div>
                <div className='rounded-lg border border-white/5 bg-[#0b1220] p-3 text-sm text-slate-300'>
                  {example.input}
                </div>
              </div>

              <div className='mb-4 text-center text-sm text-blue-400'>↓</div>

              <div>
                <div className='mb-1 text-xs uppercase text-slate-500'>
                  {t.examples.output}
                </div>
                <div className='rounded-lg border border-white/5 bg-[#0b1220] p-3 text-sm text-slate-300'>
                  {example.output}
                </div>
              </div>

              <div className='mt-6 h-px w-full bg-linear-to-r from-blue-500/40 to-transparent' />
            </div>
          ))}
        </div>

        <div className='mt-12 text-center text-sm text-slate-500'>
          {t.examples.bottom}
        </div>
      </div>
    </section>
  )
}
