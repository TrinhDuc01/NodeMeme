
import { useSelector } from 'react-redux'

export default function Text({ text, className, handleClick }) {
    let color = useSelector(state => state.color.currentColor)
    // console.log(color.textColor)
    return (
        <p onClick={handleClick} className={className} style={{ color: color?.textColor }}>{text}</p>
    )
}
