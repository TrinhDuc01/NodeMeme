
import { useSelector } from 'react-redux'

export default function NavComponent({ className, children }) {
    let color = useSelector(state => state.color.currentColor)
    return (
        <nav className={className}
            style={{ backgroundColor: color?.backgroundColor}}
        >
            {children}
        </nav>
    )
}
