import { useState } from 'react'
import Home from './Home'
import video from '../video/rickRoll.mp4'
import Button from '../components/Button'
export default function Body() {
    const [toggle, setToggle] = useState(false);

    const handleClickRoll = () => {
        setToggle(!toggle);
    }
    return (
        <div className='row'>
            <div className='text-center'>
                {toggle ? <Home className='col-12' height='auto' width='auto' video={video} />
                    : <Button type='button' className='btn btn-primary text-center mt-5 col-5 col-xl-3' text='Điều bất ngờ!!' handleClick={handleClickRoll} />}
            </div>

        </div>
    )
}
