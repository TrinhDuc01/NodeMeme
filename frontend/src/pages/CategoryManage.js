import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { createCategory } from '../api/apiCategoryRequest';
import { createAxiosRefreshToken } from '../api/apiRefreshToken';
import { loginSuccess } from '../redux/authSlice';


export default function CategoryManage() {
    const user = useSelector(state => state.auth.login.currentUser);
    const [categoryName, setCategoryName] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let axiosRefeshToken = createAxiosRefreshToken(user?.accessToken, dispatch, loginSuccess); // tra ve 1 axios kiem tra access token
    console.log(user?.accessToken)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const category = {
            name: categoryName,
            isActive: 1
        }

        createCategory(category, navigate, user?.accessToken, axiosRefeshToken);//tao 1 category 
        setCategoryName('')
    }

    return (
        <div className='row mt-lg-1 d-block d-lg-flex'>
            <div className='col-3'></div>
            <div className='col-lg-6 mt-lg-1'>
                <Form handleSearchSubmit={handleSubmit} className='d-grid gap-2'>
                    <Input handleOnchange={e => setCategoryName(e.target.value)} value={categoryName}
                        className='form-control me-2'
                        name='username' type="text" placeholder="Category Name" />
                    <div className='text-center'>
                        <Button className="btn btn-primary" type="submit" text='Create' />
                    </div>
                </Form>
            </div>
        </div>
    )
}
