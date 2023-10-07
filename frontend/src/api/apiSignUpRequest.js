import { toast } from "react-toastify";
import { instanceAxios } from "./config";



export const signUpUser = async (user) => {
    try {
        const res = await instanceAxios.post("api/user/sign-up", user);
        console.log(res)
        toast.success(res?.data.message);
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error?.response?.data.message)
    }
}