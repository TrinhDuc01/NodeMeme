import React from 'react'

export default function Input({ type, handleOnchange, className, placeholder, arialabel, name }) {
    return (
        <input onChange={handleOnchange} type={type} className={className} placeholder={placeholder} aria-label={arialabel} name={name}></input>
    )
}
