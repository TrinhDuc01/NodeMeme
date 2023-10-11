import React, { useState } from 'react'
import Text from '../components/Text'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../api/apiLoginRequest'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const naviagte = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        };
        loginUser(user, dispatch, naviagte);
        setUsername('');
        setPassword('');
    }

    const handleNavigate = (url) => {
        return naviagte(url)
    }
    return (
        <div className='row mt-lg-5 d-block d-lg-flex'>
            <div className='col-lg-2'></div>
            <div className='col-lg-5 mt-2 mt-lg-5 text-lg-start text-center'>
                <Text handleClick={()=>handleNavigate('/')} className='fs-1 text-decoration-none fw-bold text-lg-start'text='Meme'></Text>
                <Text className='fs-3 d-none d-lg-block' text="Meme Login page. You don't need to log in!" />
            </div>
            <div className='col-lg-3 mt-lg-5'>
                <Form handleSearchSubmit={handleLoginSubmit} className='shadow p-3 mb-5 bg-body rounded d-grid gap-2'>
                    <Input handleOnchange={e => setUsername(e.target.value)} value={username}
                        className='form-control me-2'
                        name='username' type="text" placeholder="Username" />
                    <Input handleOnchange={e => setPassword(e.target.value)} value={password}
                        className='form-control me-2'
                        name='password' type="password" placeholder="Password" />
                    <div className='text-center'>
                        <Button className="btn btn-primary" type="submit" text='Login' />
                    </div>
                    <div className='text-center border-top p-2'>
                        <Button handleClick={()=>handleNavigate('/sign-up')} className="btn btn-success" to='/sign-up' text='SignUp'>SignUp</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
