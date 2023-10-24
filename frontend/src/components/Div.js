
import { useSelector } from 'react-redux'

export default function () {
    let color = useSelector(state => state.color.currentColor)
    return (
        <div></div>
    )
}
