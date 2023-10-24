
import { BsSun } from 'react-icons/bs'
import { CiDark } from 'react-icons/ci'
import { TbMilkshake } from 'react-icons/tb'
import colorTheme from '../colorStyle'
import { colorSuccess } from '../redux/colorSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeTheme() {
    const dispatch = useDispatch()
    const color = useSelector(state => state.color.currentColor)
    const handleChangeTheme = (theme) => {
        dispatch(colorSuccess(theme))
    }
    return (
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {color.theme === 'brown' ? <TbMilkshake color='#113946' />
                        :
                        color.theme === 'light' ? <BsSun color='#112D4E' />
                            :
                            color.theme === 'dark' && <CiDark color='#FAF0E6' />
                    }
                </button>
                <ul className="dropdown-menu">
                    {colorTheme.map(color => (
                        <li key={color.theme}><button onClick={() => handleChangeTheme(color)} className="dropdown-item">
                            {color.theme === 'brown' ? <TbMilkshake />
                                :
                                color.theme === 'light' ? <BsSun />
                                    :
                                    color.theme === 'dark' && <CiDark />
                            } {color.theme}
                        </button></li>
                    ))}
                </ul>
            </li>
        </ul>
    )
}
