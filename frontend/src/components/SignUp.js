import React from 'react'
import Text from './Text';
import Form from './Form';
import Input from './Input';
import Button from './Button';

export default function SignUp() {
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='row mt-lg-5 d-block d-lg-flex'>
            <div className='col-lg-2'></div>
            <div className='col-lg-5 mt-2 mt-lg-5'>
                <Text className='fs-1 text-primary fw-bold text-lg-start text-center' text='Meme' />
                <Text className='fs-3 d-none d-lg-block' text="Meme sign up page. If you're just viewing memes, there's no need to register." />
            </div>
            <div className='col-lg-4 mt-lg-5'>
                <Form handleSearchSubmit={handleSignUpSubmit} className='shadow p-3 mb-5 bg-body rounded d-grid gap-3'>
                    <Input className="form-control me-2" name='username' type="text" placeholder="Username" />
                    <Input className="form-control me-2" name='email' type="email" placeholder="Email" />
                    <Input className="form-control me-2 " type="password" placeholder="Password" />
                    <div className='text-center'>
                        <Button className="btn btn-primary" type="submit" text='Sign Up' />
                    </div>
                </Form>
            </div>
        </div>
    )
}
