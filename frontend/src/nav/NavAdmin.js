import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../api/apiLoginRequest';
import Text from '../components/Text';
import jwt_decode from 'jwt-decode'
import NavComponent from '../components/NavComponent';
import LinkTo from '../components/LinkTo';
import ChangeTheme from './ChangeTheme';
export default function NavAdmin() {

    let user = useSelector(state => state.auth.login.currentUser);
    // console.log(user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let decode;
    if (user) { decode = jwt_decode(user?.accessToken) }// giai ma lay payload cua access token

    if (!decode?.isadmin) return <Navigate to="/" /> // khong phai admin thi ve trang chu

    const handleLogout = () => {
        logoutUser(dispatch, navigate)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <NavComponent className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <LinkTo className="navbar-brand fs-4" to="/admin" text='Meme' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkTo className="nav-link active" aria-current="page" to="/audio-meme" text='Audio meme' />
                            </li>
                            <li className="nav-item">
                                <LinkTo className="nav-link" to="/image-meme" text='Image meme' />
                            </li>
                            <Form handleSearchSubmit={handleSearchSubmit} className={'d-flex'}>
                                <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Button className="btn btn-outline-success" type="submit" text='Search' />
                            </Form>
                        </ul>

                        {user &&
                            <>
                                <Text className="my-auto fs-4 mx-3" type="button" text={`Hi, ${user?.userInfo.username}`} />
                                <Button className="btn btn-danger" handleClick={handleLogout} type="button" text='Logout' />
                            </>
                        }
                        <ChangeTheme />
                    </div>
                </div>
            </NavComponent>
            <div style={{
                //thanh duoi nav
                height: 1,
                backgroundImage: "linear-gradient(90deg,rgba(0,0,0,0.00) 0%,#000000 50%,rgba(0,0,0,0.00) 100%)",
                opacity: 0.1,
                width: "100%"
            }}></div >
            <Outlet />
        </>
    )
}
