import db from "../models";
import { checkInputNull } from "./checkService";
import { compareHashPass } from "./hashPassService";
import tokenService from './tokenService'
import { config } from 'dotenv'
config();
const accessKey = process.env.ACCESS_SECRET_KEY;
const refreshKey = process.env.REFRESH_SECRET_KEY;

const authService = {
    loginService: async (username, password) => {
        const user = await db.User.findOne({ where: { username: username } }) || { username: "", password: "" };
        const checkLogin = compareHashPass(password, user.password);
        const hasNull = checkInputNull([username, password]);
        let refreshToken = '';
        // payload
        const userInfo = {
            id: user.id,
            username: user.username,
            email: user.email,
            isadmin: user.isadmin
        }

        // kiem tra dang nhap
        if (hasNull) return {
            message: "Please fill in all information into the field!",
            login: false,
            status: 401
        }
        if (!checkLogin) return {
            message: "Username or password is not correct!",
            login: false,
            status: 401
        }

        // kiem tra trong db co refresh token chua
        const checkIssetRefreshToken = await db.RefreshToken.findOne({ where: { UserId: user.id } });
        if (checkIssetRefreshToken) refreshToken = checkIssetRefreshToken.token;
        else {
            refreshToken = tokenService.generateToken(userInfo, refreshKey, 3600 * 24 * 30);//exp 1 monnth
            await tokenService.saveRefreshToken(refreshToken, user.id);
        }
        return {
            accessToken: tokenService.generateToken(userInfo, accessKey, 3600),//create access token
            refreshToken,// refresh token
            message: "Login successfully!",
            login: true,
            status: 200
        }
    },
    refreshAccessToken: async (refreshToken) => {
        const oldRefreshToken = await tokenService.checkIssetToken(refreshToken)// kiem tra refresh token co trong db khong
        if (!refreshToken) return {
            message: "You're not authenticated, khong co refresh token!",
            status: 401
        }
        if (!oldRefreshToken) return {
            message: "Refresh Token is not valid!",
            status: 403
        }
        try {
            const payload = tokenService.verifyToken(refreshToken, refreshKey); // tra ve payload
            const userPayload = {
                id: payload.id,
                username: payload.username,
                email: payload.email
            }
            //tao moi refresh token
            const newRefreshToken = tokenService.generateToken(userPayload, refreshKey, 3600 * 24 * 30)
            //sua token trong db
            await tokenService.updateRefeshToken(newRefreshToken, userPayload.id);
            //tao moi access token
            const newAccessToken = tokenService.generateToken(userPayload, accessKey, 3600);
            return {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
                message: "Refresh Token is not valid!",
                status: 200
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }


}

export default authService;