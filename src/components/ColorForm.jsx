import React from 'react'
import {useInput} from '../hooks/input.jsx'
import { useColors } from '../hooks/ColorProvider.jsx'

export default function ColorForm() {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")
  const {addColor} = useColors

  const handleSubmit = e => {
    e.preventDefault()
    addColor(titleProps.value, colorProps.value)
    resetTitle()
    resetColor()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required/>
      <button>ADD</button>
    </form>
  )
}