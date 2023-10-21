import React from 'react'
import { useSelector } from 'react-redux'

export default function Button({ text, type, className, handleClick, children }) {
    let color = useSelector(state => state.color.currentColor)
    return (
        <button type={type} className={className} onClick={handleClick}
            style={{
                border: "none",
                backgroundColor: color?.buttonColor,
                color: color?.textColor
            }}
        >
            {children}
            {text}
        </button>
    )
}
