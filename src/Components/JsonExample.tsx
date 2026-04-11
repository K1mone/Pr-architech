import { useLanguage } from '../context/LanguageContext'

export default function JsonExample() {
  const { t } = useLanguage()

  return (
    <section className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>{t.jsonExample.title}</h2>
          <p className='mx-auto mt-4 max-w-2xl text-slate-400'>
            {t.jsonExample.subtitle}
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <h3 className='mb-4 text-xl font-semibold'>
              {t.jsonExample.contentTitle}
            </h3>

            <ul className='space-y-3 text-sm text-slate-300'>
              {t.jsonExample.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className='mt-6 text-sm text-slate-500'>{t.jsonExample.note}</div>
          </div>

          <div className='relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] p-6 font-mono text-sm'>
            <div className='mb-4 flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-red-400' />
              <div className='h-3 w-3 rounded-full bg-yellow-400' />
              <div className='h-3 w-3 rounded-full bg-green-400' />
            </div>

            <pre className='overflow-x-auto text-slate-300'>
              <code>{t.jsonExample.code}</code>
            </pre>

            <div className='pointer-events-none absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-violet-500/10' />
          </div>
        </div>

        <div className='mt-12 text-center text-sm text-slate-500'>
          {t.jsonExample.bottom}
        </div>
      </div>
    </section>
  )
}
