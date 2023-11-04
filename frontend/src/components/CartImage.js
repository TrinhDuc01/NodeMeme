
import { useSelector } from 'react-redux'
import anh from '../img/thoRoDuy.jpg'
import LinkToDownload from './LinkToDowload'
export default function CartImage() {
  let color = useSelector(state => state.color.currentColor)
  return (
    <div className="card mt-3" style={{ width: '18rem' }}>
      <img src={anh} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Richa</h5>
        <LinkToDownload to={anh} target="_blank" download={true} className='btn shadow-sm rounded' text='Download' />
      </div>
    </div>
  )
}