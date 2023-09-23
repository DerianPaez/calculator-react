/* eslint-disable react/prop-types */
export default function CalculatorButton({ value, className, onClick }) {
  return (
    <button
      onClick={() => onClick(value)}
      className={`${className} bg-gray dark:bg-darkGray dark:text-white text-sm sm:text-lg xl:text-3xl xl:font-semibold py-4 rounded-xl shadow-button outline-none hover:scale-95 transition-all grid place-items-center`}
    >
      {value}
    </button>
  )
}
