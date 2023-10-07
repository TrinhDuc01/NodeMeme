import React from 'react'

export default function Button({ text, type, className, handleClick }) {
    return (
        <button type={type} className={className} onClick={handleClick}>{text}</button>
    )
}
