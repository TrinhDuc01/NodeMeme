
import { useSelector } from 'react-redux'

import heheboy from '../audio/heheboy.mp3'
import Button from './Button'
import LinkToDownload from './LinkToDowload'
export default function CardAudio({ name }) {
    let color = useSelector(state => state.color.currentColor)
    const play = () => {
        new Audio(heheboy).play()
    }
    return (
        <div class="card mt-3" style={{ width: '18rem' }}>
            <div class="card-body">
                <h5 class="card-title mb-3 text-center">Tên meme{ }</h5>
                <div className='d-flex justify-content-around'>
                    <Button className='btn' handleClick={play}>Play sound</Button>
                    <LinkToDownload to={heheboy} target="_blank" download={true} className='btn' >Download</LinkToDownload>
                </div>
            </div>
        </div>
    )
}
