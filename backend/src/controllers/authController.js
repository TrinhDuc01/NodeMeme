
import authService from "../services/authService";

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body 
            const { accessToken, refreshToken, message, login, status } = await authService.loginService(username, password);
            res.cookie('refreshToken', refreshToken, { maxAge: 3600000 * 24 * 30, httpOnly: true })
            return res.status(status).json({
                accessToken,
                message,
                login,
                status
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    refreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken
        try {
            const refreshSuccess = await authService.refreshAccessToken(refreshToken);
            const data = {
                ...refreshSuccess,
                refreshToken: '',
            }
            res.cookie('refreshToken', refreshSuccess.refreshToken, { maxAge: 3600000 * 24 * 30, httpOnly: true })
            res.status(refreshSuccess.status).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }

    },
    logout: async (req,res)=>{
        res.clearCookie("refreshToken");
        return res.status(200).json("Logout successfully!")
    }
};

export default authController;
