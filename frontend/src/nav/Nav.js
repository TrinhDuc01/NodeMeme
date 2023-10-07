import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../api/apiLoginRequest';

export default function Nav() {

    const user = useSelector(state => state.auth.login.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser(dispatch, navigate)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/audio-meme">Audio meme</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/image-meme">Image meme</Link>
                            </li>
                            <Form handleSearchSubmit={handleSearchSubmit} className={'d-flex'}>
                                <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Button className="btn btn-outline-success" type="submit" text='Search' />
                            </Form>
                        </ul>

                        {user ?
                            <>
                                <Button className="btn btn-primary" type="button" text={`${user?.userInfo.username}`} />
                                <Button className="btn btn-danger" handleClick={handleLogout} type="button" text='Logout' />
                            </>
                            :
                            <>
                                <Link className="btn btn-outline-success" to="/login">Login</Link>
                                <Link className="btn btn-success" to='/sign-up'>SignUp</Link>
                            </>
                        }
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
