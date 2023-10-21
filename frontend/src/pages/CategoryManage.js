import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { createCategory, getAllCategory } from '../api/apiCategoryRequest';
import { createAxiosRefreshToken } from '../api/apiRefreshToken';
import { loginSuccess } from '../redux/authSlice';
import UpdateCategoryModal from '../components/UpdateCategoryModal';
import TableListCategory from '../components/TableListCategory';



export default function CategoryManage() {
    const user = useSelector(state => state.auth.login.currentUser);
    const categoryList = useSelector(state => state.category.listCategory);
    const [categoryName, setCategoryName] = useState('')
    const dispatch = useDispatch();
    let axiosRefeshToken = createAxiosRefreshToken(user?.accessToken, dispatch, loginSuccess); // tra ve 1 axios kiem tra access token
    // console.log(user?.accessToken)

    useEffect(() => {
        getAllCategory(dispatch);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const category = {
            name: categoryName,
            isActive: 1
        }
        createCategory(category, user?.accessToken, axiosRefeshToken, dispatch);//tao 1 category 
        setCategoryName('');
    }


    return (
        <div className='row mx-1 mt-lg-1 d-block d-lg-flex gap-2 '>
            <UpdateCategoryModal axiosRefeshToken={axiosRefeshToken} />
            <div className='col-3'></div>
            <div className='col-lg-6 my-1'>
                <Form handleSearchSubmit={handleSubmit} className='d-flex gap-2'>
                    <Input handleOnchange={e => setCategoryName(e.target.value)} value={categoryName}
                        className='form-control me-2'
                        name='username' type="text" placeholder="Category Name" />
                    <Button className="btn btn-primary" type="submit" text='Create' />
                </Form>
            </div>
            <TableListCategory axiosRefeshToken={axiosRefeshToken}/>
        </div>
    )
}
