
import { useSelector } from 'react-redux'

export default function DivColor({ text, className, children }) {
    let color = useSelector(state => state.color.currentColor)
    // console.log(color.textColor)
    return (
        <div className={className} style={{ color: color?.textColor, backgroundColor:color?.backgroundColor }}>{text}{children}</div>
    )
}
