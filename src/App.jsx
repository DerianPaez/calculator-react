import { useEffect } from 'react'
import { useState } from 'react'
import CalculatorButton from './components/calculator-button'
import Display from './components/display'
import { FiDelete } from 'react-icons/fi'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

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
    <main className="bg-[#d9d9d9] dark:bg-slate-900 px-5 xl:px-16 py-3 h-screen">
      <button
        className="bg-cyan grid place-items-center w-8 h-8 xl:h-12 xl:w-12 outline-none fixed right-2 top-2 xl:right-6 xl:top-6 rounded-full"
        onClick={handleDarkMode}
      >
        {theme === 'dark' ? (
          <BsFillSunFill color="white" />
        ) : (
          <BsFillMoonFill />
        )}
      </button>
      <section className="grid place-items-center h-full">
        <div className="bg-white dark:bg-black rounded-3xl p-5 grid gap-2 xl:gap-5 max-w-[400px]">
          <Display />
          <div className="grid grid-cols-4 grid-rows-5 gap-2 md:gap-5">
            {values.map(({ value, className }, index) => {
              return (
                <CalculatorButton
                  key={index}
                  value={value}
                  className={className}
                />
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

const values = [
  { value: 'AC', className: 'text-cyan dark:bg-secondaryDarkGray' },
  {
    value: <FiDelete fontSize="20px" />,
    className: 'text-cyan dark:bg-secondaryDarkGray',
  },
  { value: '×', className: 'text-cyan bg-lightBlue dark:!bg-darkBlue' },
  { value: '÷', className: 'text-cyan bg-lightBlue dark:!bg-darkBlue' },
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: '-', className: 'text-cyan bg-lightBlue dark:!bg-darkBlue' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '+', className: 'text-cyan bg-lightBlue dark:!bg-darkBlue' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '=', className: 'row-span-2 !bg-cyan dark:!bg-cyan' },
  { value: '0', className: 'col-span-2' },
  { value: ',' },
]
