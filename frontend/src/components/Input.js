import React from 'react'

export default function Input({ type, handleOnchange, value, className, placeholder, arialabel, name }) {
    return (
        <input
            onChange={handleOnchange} type={type} value={value} className={className} placeholder={placeholder} aria-label={arialabel} name={name}>
        </input>
    )
}
