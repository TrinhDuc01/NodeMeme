import React from 'react'

export default function Form({ children, handleSearchSubmit, className }) {
    return (
        <form onSubmit={handleSearchSubmit} className={className}>
            {children}
        </form>
    )
}
