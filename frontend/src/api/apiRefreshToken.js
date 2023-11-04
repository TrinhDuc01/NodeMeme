import { axiosAuth } from "./config";
import jwt_decode from "jwt-decode"
import axios from "axios";



const refreshToken = async () => {
    try {
        const res = await axiosAuth.post("api/auth/refresh-token");//goi api refreshtoken tra ve accesstoken, refreshtoken luu vao cookie
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export const createAxiosRefreshToken = (accessToken, dispatch, loginSuccess) => {
    const refresh = axios.create({
        baseURL: process.env.REACT_APP_BASEURLAUTH || 'http://localhost:3001/',// khong them thi no thanh /admin
        timeout: 1000,
    });
    refresh.defaults.withCredentials = true;//gui request kem cookie
    refresh.interceptors.request.use(
        async (config) => {
            let date = new Date()
            const decodedToken = jwt_decode(accessToken);//giai ma jwt tra ve payload
            const user = {
                id: decodedToken.id,
                username: decodedToken.username,
                email: decodedToken.email,
                isadmin: decodedToken.isadmin
            }
            //kiem tra access token het han chua neu het han thi tao accesstoken va refresh token moi
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                // console.log('hết hạn', data.accessToken)
                const refreshUser = {
                    userInfo: user,
                    accessToken: data.accessToken,
                }
                // console.log(refreshUser)
                dispatch(loginSuccess(refreshUser));//luu access token moi vao kho state
                config.headers["token"] = "Bearer " + data.accessToken; // chen token vao header
            }
            return config
        },
        (err) => Promise.reject(err)
    );
    return refresh;
}