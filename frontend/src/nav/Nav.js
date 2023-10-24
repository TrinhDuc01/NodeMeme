
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
import { IoPawOutline } from 'react-icons/io5';
import LineUnderNav from '../components/LineUnderNav';



export default function Nav() {

    const user = useSelector(state => state.auth.login.currentUser)
    
    // console.log(user)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let decode;
    if (user) { decode = jwt_decode(user?.accessToken) }// giai ma lay payload cua access token


    if (decode?.isadmin) return <Navigate to="/admin/category" /> // khong phai admin thi ve trang chu


    const handleLogout = () => {
        logoutUser(dispatch, navigate)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    const handleNavigate = (url) => {
        return navigate(url)
    }


    
    return (
        <>
            <NavComponent className="navbar navbar-expand-lg">
                <div className="container-fluid">
                <LinkTo className="navbar-brand fs-4" to="/admin" ><IoPawOutline size={50}/></LinkTo>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkTo className="nav-link active" to="/audio-meme" text='Audio'></LinkTo>
                            </li>
                            <li className="nav-item">
                                <LinkTo className="nav-link" to="/image-meme" text='Image'></LinkTo>
                            </li>

                            <Form handleSearchSubmit={handleSearchSubmit} className={'d-flex'}>
                                <Input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <Button className="btn btn-outline-success" type="submit" text='Search' />
                            </Form>
                        </ul>

                        {user ?
                            <>
                                <Text className="my-auto fs-3 me-2" type="button" text={`Hi, ${user?.userInfo.username}`} />
                                <Button className="btn btn-danger" handleClick={handleLogout} type="button" text='Logout' />
                            </>
                            :
                            <>
                                <Button className="btn btn-outline-success" handleClick={() => handleNavigate('/login')} to="/login" text='Login'></Button>
                                <Button className="btn btn-success mx-2" handleClick={() => handleNavigate("/sign-up")} to='/sign-up' text='SignUp'></Button>
                            </>
                        }
                        <ChangeTheme/>
                    </div>
                </div>
            </NavComponent>
            <LineUnderNav/>
            <Outlet />
        </>
    )
}
