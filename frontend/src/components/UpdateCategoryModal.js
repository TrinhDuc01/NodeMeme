import React, { useState } from 'react'
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { categoryUpdateSuccessfully } from '../redux/categorySlice';
import Form from './Form';
import Input from './Input';
import { updateCategory } from '../api/apiCategoryRequest';
import { useNavigate } from 'react-router';
import LeadModal from './LeadModal';
import Select from './Select';
import Option from './Option';

export default function UpdateCategoryModal({ axiosRefeshToken }) {
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(1);
    const dispatch = useDispatch();
    const naviagte = useNavigate();
    const handleSuccess = () => {
        console.log('he')
        dispatch(categoryUpdateSuccessfully());
    }
    let categoryUpdate = useSelector(state => state.category.categoryUpdate);
    let accessToken = useSelector(state => state.auth.login.currentUser?.accessToken)
    // console.log(categoryUpdate?.showModalUpdateCategory)

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const category = {
            id: categoryUpdate.update.id,
            name,
            isActive
        }
        updateCategory(category, dispatch, naviagte, accessToken, axiosRefeshToken);
        setIsActive(1);
        setName('')
    }

    return (
        <>
            <LeadModal toggleShowHide={categoryUpdate?.showModalUpdateCategory} text='Update category'>
                <Form handleSearchSubmit={handleUpdateSubmit} className='d-grid gap-2'>
                    Category Name:
                    <Input handleOnchange={e => setName(e.target.value)}
                        className='form-control me-2'
                        name='name' type="text" placeholder="Category Name" />
                    Is Active:
                    <Select name='isActive' defaultValue={1} className="form-select" handleChange={e => setIsActive(e.target.value)} >
                        <Option value={1} text='Active'/>
                        <Option value={0} text='Disable'/>
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
