import React from 'react'
import Text from '../components/Text'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Login() {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='row mt-lg-5 d-block d-lg-flex'>
            <div className='col-lg-2'></div>
            <div className='col-lg-5 mt-2 mt-lg-5'>
                <Text className='fs-1 text-primary fw-bold text-lg-start text-center' text='Meme' />
                <Text className='fs-3 d-none d-lg-block' text="Meme Login page. You don't need to log in" />
            </div>
            <div className='col-lg-4 mt-lg-5'>
                <Form handleSearchSubmit={handleLoginSubmit} className='shadow p-3 mb-5 bg-body rounded d-grid gap-2'>
                    <Input className="form-control me-2" name='username' type="text" placeholder="Username"/>
                    <Input className="form-control me-2" name='password' type="password" placeholder="Password"/>
                    <div className='text-center'>
                        <Button className="btn btn-primary" type="submit" text='Login'/>
                    </div>
                    <div className='text-center border-top p-2'>
                        <Link className="btn btn-success" to='/sign-up'>SignUp</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
