import DisplayInput from './display-input'

export default function Display() {
  return (
    <div className="px-2">
      <DisplayInput placeholder="0" isDisabled={false} />
      <DisplayInput isDisabled={false} />
    </div>
  )
}
