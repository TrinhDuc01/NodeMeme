import React from 'react'
import { useSelector } from 'react-redux'

export default function CartImage() {
  let color = useSelector(state => state.color.currentColor)
  return (
    <div>CartImage</div>
  )
}
