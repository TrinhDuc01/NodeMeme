
import { useSelector } from 'react-redux'

export default function CardAudio() {
    let color = useSelector(state => state.color.currentColor)
    return (
        <div>CardAudio</div>
    )
}
