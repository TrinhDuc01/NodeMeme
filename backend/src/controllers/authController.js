
import authService from "../services/authService";


const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body
            const userLogin = await authService.loginService(username, password);
            return res.status(userLogin.status).json(userLogin);
        } catch (error) {
            return res.status(500).json("Server error");
        }
    },
};

export default authController;
