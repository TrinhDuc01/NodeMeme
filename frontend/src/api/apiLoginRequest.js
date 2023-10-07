
import { toast } from 'react-toastify';
import { loginFailed, loginStart, loginSuccess, logoutSuccess } from '../redux/authSlice';
import { axiosAuth } from './config'


export const loginUser = async (user, dispatch, naviagte) => {
    dispatch(loginStart());
    try {
        const res = await axiosAuth.post("api/auth/login", user);
        console.log(res.data.userInfo.isadmin)
        toast.success(res.data.message)
        dispatch(loginSuccess({
            userInfo: res.data.userInfo,
            accessToken: res.data.accessToken
        }));
        res.data.userInfo.isadmin ? naviagte("/admin/category") : naviagte("/");
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        dispatch(loginFailed());
    }
}

export const logoutUser = async (dispatch) => {
    try {
        const res = await axiosAuth.post("api/auth/logout");
        toast.success(res.data)
        dispatch(logoutSuccess());
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        console.log(error)
    }
}

