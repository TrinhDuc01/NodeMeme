
import userService from "../services/userService"

const userController = {
    test: (req, res) => {
        res.json('vl')
    },

    signUp: async (req, res) => {
        const { username, password, confirmpassword, email } = req.body
        console.log(username, password, confirmpassword, email)
        try {
            const userStatus = await userService.signUp(username, password, confirmpassword, email);
            return res.status(200).json(userStatus)
        } catch (error) {
            return res.status().json('Can not Sign Up');
        }
    },

    login: async(req, res)=>{
        
    }
}

export default userController;