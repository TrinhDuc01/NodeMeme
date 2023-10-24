
import { useSelector } from 'react-redux'

export default function LineUnderNav() {
    let color = useSelector(state => state.color.currentColor)
  return (
    <div style={{
        //thanh duoi nav
        height: 1,
        backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0.00) 0%,${color?.textColor} 50%,rgba(0,0,0,0.00) 100%)`,
        opacity: 0.1,
        width: "100%"
    }}></div >
  )
}
