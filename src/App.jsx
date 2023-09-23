import { useEffect } from 'react'
import { useState } from 'react'
import CalculatorButton from './components/calculator-button'
import Display from './components/display'
import { FiDelete } from 'react-icons/fi'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useCalculate } from './hooks/useCalculate'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || LIGHT_THEME
  })

  const { result, handleClick, inputValue } = useCalculate()

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === DARK_THEME) {
      localStorage.setItem('theme', DARK_THEME)
      root.classList.add(DARK_THEME)
      return
    }
    localStorage.setItem('theme', LIGHT_THEME)
    root.classList.remove(DARK_THEME)
  }, [theme])

  const handleDarkMode = () => {
    setTheme((prevTheme) =>
      prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    )
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
        <div className="bg-white dark:bg-black rounded-3xl p-5 grid gap-3 xl:gap-5 max-w-[400px]">
          <Display value={inputValue} result={result} />
          <div className="grid grid-cols-4 grid-rows-5 gap-2 md:gap-5">
            {values.map(({ value, className }, index) => {
              return (
                <CalculatorButton
                  key={index}
                  value={value}
                  className={className}
                  onClick={handleClick}
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
    value: <FiDelete fontSize="20px" key="deleteIcon" />,
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
  { value: '.' },
]
