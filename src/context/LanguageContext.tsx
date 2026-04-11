/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useMemo, useState } from 'react'
import { translations, type Language, type TranslationSchema } from '../translations'

type LanguageContextType = {
  lang: Language
  setLang: (lang: Language) => void
  t: TranslationSchema
}

const STORAGE_KEY = 'site-language'

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLang = window.localStorage.getItem(STORAGE_KEY)

    if (savedLang === 'en' || savedLang === 'ru' || savedLang === 'zh') {
      return savedLang
    }

    return 'en'
  })

  const setLang = (nextLang: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLang)
    setLangState(nextLang)
  }

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
    }),
    [lang]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}