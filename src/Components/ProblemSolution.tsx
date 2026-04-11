import { useLanguage } from '../context/LanguageContext'

export default function ProblemSolution() {
  const { t } = useLanguage()

  return (
    <section className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>
            {t.problemSolution.title}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-slate-400'>
            {t.problemSolution.subtitle}
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <div className='rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur'>
            <h3 className='mb-4 text-lg font-semibold text-red-400'>
              {t.problemSolution.problemTitle}
            </h3>

            <ul className='space-y-3 text-sm text-slate-300'>
              {t.problemSolution.problemItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className='rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur'>
            <h3 className='mb-4 text-lg font-semibold text-blue-400'>
              {t.problemSolution.solutionTitle}
            </h3>

            <ul className='space-y-3 text-sm text-slate-300'>
              {t.problemSolution.solutionItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='mt-16 flex justify-center'>
          <div className='flex items-center gap-4 text-sm text-slate-400'>
            <span>{t.problemSolution.flow[0]}</span>
            <span className='text-blue-400'>→</span>
            <span>{t.problemSolution.flow[1]}</span>
            <span className='text-blue-400'>→</span>
            <span>{t.problemSolution.flow[2]}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
