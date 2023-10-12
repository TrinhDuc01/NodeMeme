import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { createCategory, getAllCategory } from '../api/apiCategoryRequest';
import { createAxiosRefreshToken } from '../api/apiRefreshToken';
import { loginSuccess } from '../redux/authSlice';
import PaginateItem from '../components/PaginateItemCategory';


export default function CategoryManage() {
    const user = useSelector(state => state.auth.login.currentUser);
    const categoryList = useSelector(state => state.category.listCategory);
    const [categoryName, setCategoryName] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let axiosRefeshToken = createAxiosRefreshToken(user?.accessToken, dispatch, loginSuccess); // tra ve 1 axios kiem tra access token
    // console.log(user?.accessToken)

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = {
            name: categoryName,
            isActive: 1
        }

        createCategory(category, navigate, user?.accessToken, axiosRefeshToken);//tao 1 category 
        getAllCategory(dispatch);
        setCategoryName('')
    }




    return (
        <div className='row mt-lg-1 d-block d-lg-flex gap-2'>
            <div className='col-3'></div>
            <div className='col-lg-6 mt-lg-1'>
                <Form handleSearchSubmit={handleSubmit} className='d-flex gap-2'>
                    <Input handleOnchange={e => setCategoryName(e.target.value)} value={categoryName}
                        className='form-control me-2'
                        name='username' type="text" placeholder="Category Name" />
                    <Button className="btn btn-primary" type="submit" text='Create' />
                </Form>
            </div>
            <PaginateItem items={categoryList} itemsPerPage={7} />
        </div>
    )
}
