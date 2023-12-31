
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function LinkTo({ className, to, text, target, download, children }) {
    let color = useSelector(state => state.color.currentColor)
    return (
        <Link
            target={target}
            download={download}
            className={className}
            to={to}
            style={{ color: color?.textColor}}
        >{text}{children}
        </Link>
    )
}
