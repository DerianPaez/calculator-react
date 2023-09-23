import { useState } from 'react'

export const useCalculate = () => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value) => {
    const isPressDelete = value === 'AC'
    if (isPressDelete) {
      setInputValue('')
      setResult('')
      return
    }

    const isPressDeleteOneByOne = value.key === 'deleteIcon'
    if (isPressDeleteOneByOne) {
      setInputValue(inputValue.slice(0, -1))
      return
    }

    if (value === '=') {
      try {
        const calculation = eval(inputValue)
        setResult(calculation)
      } catch (error) {
        setResult('Error')
      }
      setInputValue('')
      return
    }

    const sanitizedValue = convertValue(value)
    setInputValue((prevValue) => prevValue + sanitizedValue)
  }

  const convertValue = (value) => {
    if (value === '×') {
      return '*'
    }

    if (value === '÷') {
      return '/'
    }

    return value
  }

  return { result, handleClick, inputValue }
}
