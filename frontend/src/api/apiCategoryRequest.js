import { toast } from "react-toastify";
import { categoryListSuccess } from "../redux/categorySlice";
import { axiosSever } from "./config";

export const createCategory = async (category, naviagte, accessToken, axiosRefeshToken) => {
    try {
        const res = await axiosRefeshToken.post("api/category/create", category, {
            headers: {
                token: `Bearer ${accessToken}`,
            }
        });
        toast.success(res.data.message);
        naviagte('/admin/category')
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        console.log(error);
    }
}

// lấy tất cả category
export const getAllCategory = async (dispatch) => {
    try {
        const res = await axiosSever.post("api/category/get-all");
        // console.log(res.data)
        dispatch(categoryListSuccess(res.data))
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        console.log(error);
    }
}