
import authService from "../services/authService";

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body
            const { accessToken, refreshToken, message, login, status } = await authService.loginService(username, password);
            res.cookie('refreshToken', refreshToken, { maxAge: 3600 * 24 * 30, httpOnly: true })
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
            res.status(refreshSuccess.status).json(data);
        } catch (error) {
            return res.status(500).json(error);
        }

    },
};

export default authController;
