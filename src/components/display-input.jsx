/* eslint-disable react/prop-types */
export default function DisplayInput({ placeholder, isDisabled }) {
  return (
    <input
      type="number"
      className="dark:bg-black w-full h-8 xl:h-12 text-white outline-none text-right text-2xl xl:text-5xl"
      placeholder={placeholder}
      disabled={isDisabled}
    />
  )
}
