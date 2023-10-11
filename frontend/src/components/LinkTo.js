import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function LinkTo({ className, to, text }) {
    let color = useSelector(state => state.color.currentColor)
    return (
        <Link
            className={className}
            to={to}
            style={{ color: color?.textColor }}
        >{text}
        </Link>
    )
}
