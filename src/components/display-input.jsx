/* eslint-disable react/prop-types */
export default function DisplayInput({
  placeholder,
  isDisabled = false,
  value,
}) {
  return (
    <input
      type="text"
      className="dark:bg-black w-full h-8 xl:h-12 text-black dark:text-white outline-none text-right text-2xl xl:text-5xl"
      placeholder={placeholder}
      disabled={isDisabled}
      value={value}
      readOnly
    />
  )
}
