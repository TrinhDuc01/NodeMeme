import React, { useState } from 'react'
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Input from './Input';
import { useNavigate } from 'react-router';
import LeadModal from './LeadModal';
import Select from './Select';
import Option from './Option';
import { memeCreateSuccessfully } from '../redux/memeSlice';

export default function CreateMemeModal({ axiosRefeshToken }) {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const dispatch = useDispatch();
    const naviagte = useNavigate();
    let createNewMeme = useSelector(state => state.meme);
    let accessToken = useSelector(state => state.auth.login.currentUser?.accessToken);
    // console.log(categoryUpdate?.showModalUpdateCategory)

    const handleSuccess = () => {
        // console.log(createNewMeme?.createMeme.showModal)
        dispatch(memeCreateSuccessfully());
    }
    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        //goi api de them moi meme va dispatch ....
        const meme = {
            name,
            file,
        }
        console.log(meme)
        setFile('')
        setName('')
    }
    // console.log(createNewMeme?.createMeme.showModal)
    return (
        <>
            <LeadModal toggleShowHide={createNewMeme?.createMeme.showModal} text='Create Meme'>
                <Form handleSearchSubmit={handleUpdateSubmit} className='d-grid gap-2'>
                    Meme Name:
                    <Input handleOnchange={e => setName(e.target.value)} value={name}
                        className='form-control me-2'
                        name='name' type="text" placeholder="Category Name" />
                    File:
                    <Input handleOnchange={e => setFile(e.target.files[0])}
                        type='file' className='form-control' name='file' />
                    Category:
                    <Select name='isActive' defaultValue={1} className="form-select" handleChange={e => setCategoryId(e.target.value)} >
                        <Option value={1} text='Active' />
                        <Option value={0} text='Disable' />
                    </Select>
                    <div className='text-end'>
                        <Button type='submit' className='btn me-1' handleClick={handleUpdateSubmit}>
                            Update
                        </Button>
                        <Button type='button' className='btn' handleClick={handleSuccess}>
                            Close
                        </Button>
                    </div>
                </Form>
            </LeadModal>
        </>
    )
}
