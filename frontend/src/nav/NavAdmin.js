
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../api/apiLoginRequest';
import Text from '../components/Text';
import jwt_decode from 'jwt-decode'
import NavComponent from '../components/NavComponent';
import LinkTo from '../components/LinkTo';
import ChangeTheme from './ChangeTheme';
import { IoPawOutline } from "react-icons/io5";
import LineUnderNav from '../components/LineUnderNav';
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

    return (
        <>
            <NavComponent className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <LinkTo className="navbar-brand fs-4" to="/admin" ><IoPawOutline size={50} /></LinkTo>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <LinkTo className="nav-link active" aria-current="page" to="/admin/category" text='Category' />
                            </li>
                            <li className="nav-item">
                                <LinkTo className="nav-link" to="/admin/meme" text='Meme' />
                            </li>
                        </ul>

                        {user &&
                            <>
                                <Text className="my-auto fs-4 me-2" type="button" text={`Hi, ${user?.userInfo.username} `} />
                                <Button className="btn btn-danger" handleClick={handleLogout} type="button" text='Logout' />
                            </>
                        }
                        <ChangeTheme />
                    </div>
                </div>
            </NavComponent>
            <LineUnderNav />
            <Outlet />
        </>
    )
}
