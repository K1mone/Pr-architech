import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id='faq' className='relative bg-[#060810] py-24 text-white'>
      <div className='mx-auto max-w-4xl px-4 md:px-8'>
        <div className='mb-16 text-center'>
          <p className='mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400'>
            {t.faq.label}
          </p>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            {t.faq.title}
          </h2>
          <p className='mt-4 text-sm text-slate-400 sm:text-base'>
            {t.faq.subtitle}
          </p>
        </div>

        <div className='space-y-4'>
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur'
              >
                <button
                  type='button'
                  onClick={() => toggleItem(index)}
                  className='flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/4 sm:px-6'
                >
                  <span className='text-sm font-medium text-white sm:text-base'>
                    {item.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-blue-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className='overflow-hidden'>
                    <div className='border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-400 sm:px-6'>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='mt-10 text-center text-sm text-slate-500'>
          {t.faq.bottom}
        </div>
      </div>
    </section>
  )
}
