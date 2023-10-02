import db from "../models";
import { checkInputNull } from "./checkService";
import { compareHashPass } from "./hashPassService";

const authService = {
    loginService: async (username, password) => {
        const user = await db.User.findOne({ where: { username: username } }) || { username: "", password: "" };
        const checkLogin = compareHashPass(password, user.password);
        const hasNull = checkInputNull([username, password]);
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
        return {
            message: "Login successfully!",
            login: true,
            status: 200
        }
    }
}

export default authService;