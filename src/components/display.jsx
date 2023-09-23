/* eslint-disable react/prop-types */
import DisplayInput from './display-input'

export default function Display({ value, result }) {
  return (
    <div className="px-2">
      <DisplayInput placeholder="0" value={value} />
      <DisplayInput isDisabled={true} value={result} />
    </div>
  )
}
