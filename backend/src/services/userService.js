import db from "../models";
import { checkInputNull } from "./checkService";
import { hashPass } from "./hashPassService";

const checkIssetEmail = async (email) => {
    const user = await db.User.findOne({ where: { email: email }, attributes: ['username', 'email'] });
    if (user) return 1;
    return 0;
}

const checkIssetUsername = async (username) => {
    const user = await db.User.findOne({ where: { username: username }, attributes: ['username', 'email'] });
    if (user) return 1;
    return 0;
}



const userService = {
    signUp: async (username, password, confirmpassword, email) => {
        let issetEmail = await checkIssetEmail(email);
        let issetUsername = await checkIssetUsername(username);
        const checkIsNull = checkInputNull([username, password, confirmpassword, email])
        if (checkIsNull) return {
            message: 'Please fill in all information into the field!',
            status: 401
        };
        if (issetEmail == 1) return {
            message: 'Email already exist',
            status: 401
        };
        if (issetUsername == 1) return {
            message: 'Username already exist',
            status: 401
        };
        if (password !== confirmpassword) return {
            message: 'Password confirm is not correct!',
            status: 401
        }
        const user = await db.User.create({
            username,
            password: hashPass(password),
            email,
            isadmin: 0
        })
        await user.save();
        return {
            message: 'Sign Up successfully',
            status: 200
        };
    }
}

export default userService;