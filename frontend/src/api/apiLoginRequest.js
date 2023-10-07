
import { toast } from 'react-toastify';
import { loginFailed, loginStart, loginSuccess, logoutSuccess } from '../redux/authSlice';
import { instanceAxios } from './config'


export const loginUser = async (user, dispatch, naviagte) => {
    dispatch(loginStart());
    try {
        const res = await instanceAxios.post("api/auth/login", user);
        toast.success(res.data.message)
        dispatch(loginSuccess({
            userInfo: res.data.userInfo,
            accessToken: res.data.accessToken
        }));
        naviagte("/");
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        dispatch(loginFailed());
    }
}

export const logoutUser = async (dispatch) => {
    try {
        const res = await instanceAxios.post("api/auth/logout");
        toast.success(res.data)
        dispatch(logoutSuccess());
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        console.log(error)
    }
}
