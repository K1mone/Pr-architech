import { Outlet } from 'react-router-dom'
import { useLanguage } from './context/LanguageContext'

export default function App() {
  const { lang } = useLanguage()

  return (
    <div key={lang}>
      <Outlet />
    </div>
  )
}
