import React from 'react'
import { useSelector } from 'react-redux'

export default function Input({ type, handleOnchange, value, className, placeholder, arialabel, name }) {
    let color = useSelector(state => state.color.currentColor)
    return (
        <input style={{ color: color?.textColor}}
            onChange={handleOnchange} type={type} value={value} className={className} placeholder={placeholder} aria-label={arialabel} name={name}>
        </input>
    )
}
