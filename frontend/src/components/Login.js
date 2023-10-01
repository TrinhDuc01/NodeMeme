import React from 'react'
import Text from './Text'
import Form from './Form'
import Input from './Input'
import Button from './Button'

export default function Login() {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='row mt-lg-5 d-block d-lg-flex'>
            <div className='col-lg-2'></div>
            <div className='col-lg-5 mt-2 mt-lg-5'>
                <Text className='fs-1 text-primary fw-bold text-lg-start text-center' text='Meme' />
                <Text className='fs-3 d-none d-lg-block' text='Meme Login page for admin.' />
            </div>
            <div className='col-lg-4 mt-lg-5'>
                <Form handleSearchSubmit={handleLoginSubmit} className='shadow p-3 mb-5 bg-body rounded d-grid gap-3'>
                    <Input className="form-control me-2" type="text" placeholder="Username" aria-label="Search" />
                    <Input className="form-control me-2 " type="password" placeholder="Password" aria-label="Search" />
                    <div className='text-center'>
                        <Button className="btn btn-primary" type="submit" text='Login' />
                    </div>
                </Form>
            </div>
        </div>
    )
}
