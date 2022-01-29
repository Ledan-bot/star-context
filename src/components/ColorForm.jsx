import React from 'react'
import {useInput} from '../hooks/input.jsx'

export default function ColorForm({onNewColor = f => f}) {
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")

  const handleSubmit = e => {
    e.preventDefault()
    onNewColor(titleProps.value, colorProps.value)
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