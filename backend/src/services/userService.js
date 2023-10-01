import db from "../models";
import bcrypt from "bcryptjs"
import { config } from 'dotenv';
config();

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


// ma hoa password
const hashPass = (password) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash
}

//so sanh password
const compareHashPass = (password) => {
    return bcrypt.compareSync(password, hash); // false
}

const userService = {
    signUp: async (username, password, confirmpassword, email) => {
        let issetEmail = await checkIssetEmail(email);
        let issetUsername = await checkIssetUsername(username);
        if (issetEmail == 1 && issetUsername == 1) {
            return 'Username or Email already exist';
        }
        if (password !== confirmpassword) return 'Password confirm is not correct!'
        const user = await db.User.create({
            username,
            password: hashPass(password),
            email,
            isadmin: 0
        })
        await user.save();
        return 'Sign Up successfully';
    }
}

export default userService;