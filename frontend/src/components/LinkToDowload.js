
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function LinkToDownload({ className, to, text, target, download, children }) {
    let color = useSelector(state => state.color.currentColor)
    return (
        <Link
            target={target}
            download={download}
            className={className}
            to={to}
            style={{ color: color?.textColor, backgroundColor: color?.buttonColor }}
        >{text}{children}
        </Link>
    )
}
