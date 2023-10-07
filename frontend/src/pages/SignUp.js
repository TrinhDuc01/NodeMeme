import React, { useState } from 'react'
import Text from '../components/Text';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { signUpUser } from '../api/apiSignUpRequest';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
            confirmPassword,
            email
        }

        signUpUser(user)

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
                    <Input className="form-control me-2" name='username'
                        handleOnchange={e => setUsername(e.target.value)} value={username}
                        type="text" placeholder="Username" />
                    <Input className="form-control me-2" name='email'
                        handleOnchange={e => setEmail(e.target.value)} value={email}
                        type="email" placeholder="Email" />
                    <Input className="form-control me-2 " name='password'
                        handleOnchange={e => setPassword(e.target.value)} value={password}
                        type="password" placeholder="Password" />
                    <Input className="form-control me-2 " name='confirmpassword'
                        handleOnchange={e => setConfirmPassword(e.target.value)} value={confirmPassword}
                        type="password" placeholder="Confirm Password" />
                    <div className='text-center'>
                        <Button className="btn btn-primary" type="submit" text='Sign Up' />
                    </div>
                </Form>
            </div>
        </div>
    )
}
