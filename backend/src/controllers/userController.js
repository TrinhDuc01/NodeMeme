
import userService from "../services/userService"

const userController = {
    test: (req, res) => {
        res.json('vl')
    },

    signUp: async (req, res) => {
        const username = req.body.username == undefined ? '' : req.body.username
        const email = req.body.email == undefined ? '' : req.body.email
        const password = req.body.password == undefined ? '' : req.body.password
        const confirmpassword = req.body.confirmpassword == undefined ? '' : req.body.confirmpassword
        // console.log(username, password, confirmpassword, email)
        try {
            const userSignUp = await userService.signUp(username, password, confirmpassword, email);
            return res.status(userSignUp.status).json(userSignUp)
        } catch (error) {
            return res.status(500).json('Can not Sign Up');
        }
    },
}

export default userController;