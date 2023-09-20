import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark')
      root.classList.add('dark')
      return
    }
    localStorage.setItem('theme', 'light')
    root.classList.remove('dark')
  }, [theme])

  const handleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <main className="bg-white dark:bg-slate-900 px-16 h-screen">
      <h1 className="text-cyan-600 dark:text-red-600 text-4xl text-center font-bold">
        Calculator Rect App
      </h1>
      <button className="bg-amber-400 py-2 px-4" onClick={handleDarkMode}>
        {theme === 'dark' ? 'Modo Light' : 'Modo Dark'}
      </button>
    </main>
  )
}
