import { useLanguage } from '../context/LanguageContext'

export default function MultiAgentRoles() {
  const { t } = useLanguage()

  return (
    <section className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-7xl px-4 md:px-8'>
        <div className='mx-auto mb-16 max-w-3xl text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400'>
            {t.roles.label}
          </p>
          <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
            {t.roles.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.roles.subtitle}
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {t.roles.agents.map((agent, index) => (
            <div
              key={agent.name}
              className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.07]'
            >
              <div className='mb-4 text-sm font-bold text-violet-400'>
                0{index + 1}
              </div>

              <h3 className='text-lg font-semibold text-white'>{agent.name}</h3>

              <div className='mt-1 text-xs uppercase tracking-wide text-slate-500'>
                {agent.role}
              </div>

              <p className='mt-3 text-sm leading-6 text-slate-400'>
                {agent.desc}
              </p>

              <div className='mt-6 h-px w-full bg-linear-to-r from-violet-500/40 to-transparent' />
            </div>
          ))}
        </div>

        <div className='mt-16 flex flex-wrap justify-center gap-3 text-sm text-slate-500'>
          <span>{t.roles.flow[0]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.roles.flow[1]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.roles.flow[2]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.roles.flow[3]}</span>
          <span className='text-violet-400'>→</span>
          <span>{t.roles.flow[4]}</span>
        </div>
      </div>
    </section>
  )
}
