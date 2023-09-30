import React from 'react'

export default function Button({ text, type, className, handleClickRoll }) {
    return (
        <button type={type} className={className} onClick={handleClickRoll}>{text}</button>
    )
}
