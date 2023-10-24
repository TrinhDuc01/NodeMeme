import React from 'react'
import Button from '../components/Button'
import Text from '../components/Text'
import { useDispatch, useSelector } from 'react-redux'
import { memeCreate } from '../redux/memeSlice';
import CreateMemeModal from '../components/CreateMemeModal';

export default function MemeManage() {
    const dispatch = useDispatch();
    const handleShowModalCreateMeme = () => {
        dispatch(memeCreate());
    }
    let createNewMeme = useSelector(state => state.meme);

    console.log(createNewMeme?.createMeme.showModal)
    return (
        <div className='row mx-1 mt-lg-1 d-block d-lg-flex gap-2 '>
            <CreateMemeModal />
            <div className='my-1 d-flex justify-content-between'>
                <Text text='Meme list' />
                <Button className="btn btn-primary" handleClick={handleShowModalCreateMeme} type="button" text='Create' />
            </div>
        </div>
    )
}
