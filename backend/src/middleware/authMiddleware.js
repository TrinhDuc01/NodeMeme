
import tokenService from "../services/tokenService";
import { config } from 'dotenv'
config();

const authMiddleware = {

    //xac thuc nguoi dung
    verifyTokenLogin: (req, res, next) => {
        const token = req.headers.token;
        // console.log(token)
        if (token) {
            const accessToken = token.split(" ")[1];
            try {
                const user = tokenService.verifyToken(accessToken, process.env.ACCESS_SECRET_KEY);
                if (!user) return res.status(401).json({
                    message: "You are not authenticated"
                });
                return next();
            } catch (error) {
                return res.status(403).json({
                    message: "Token is not valid"
                });
            }
        }
        return res.status(401).json({
            message: "You are not authenticated",
        });
    },

    verifyTokenAndAdminAuth: (req, res, next) => {
        const token = req.headers.token;
        console.log(token)
        if (token) {
            const accessToken = token.split(" ")[1];
            try {
                const user = tokenService.verifyToken(accessToken, process.env.ACCESS_SECRET_KEY);
                console.log(user)
                if (!user) return res.status(401).json({
                    message: "You are not authenticated",
                });
                if (user.isadmin === 1) return next();
                return res.status(401).json({ message: "You are not admin" });
            } catch (error) {
                return res.status(403).json({
                    message: "Token is not valid",
                });
            }
        }
        return res.status(401).json({
            message: "You are not authenticated",
        });
    }
}

export default authMiddleware;