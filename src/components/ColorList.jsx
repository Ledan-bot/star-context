import React from 'react'
import Color from './Color.jsx'
import { useColors } from '../hooks/ColorProvider.jsx'

export default function ColorList() {
  const {colors} = useColors()
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>
  return (
    <div className="color-list">
      {
        colors.map(color => <Color key={color.id} {...color} />)
      }
    </div>
  )
}