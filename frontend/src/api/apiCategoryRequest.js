import { toast } from "react-toastify";
import { categoryListSuccess, categoryUpdate, categoryUpdateSuccessfully } from "../redux/categorySlice";
import { axiosSever } from "./config";

export const createCategory = async (category, accessToken, axiosRefeshToken, dispatch) => {
    try {
        const res = await axiosRefeshToken.post("api/category/create", category, {
            headers: {
                token: `Bearer ${accessToken}`,
            }
        });
        toast.success(res.data.message);
        getAllCategory(dispatch);//cập nhật lại state chứa list category
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
        dispatch(categoryListSuccess(res.data))
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        console.log(error);
    }
}

export const getCategoryUpdate = async (dispatch, accessToken, id, axiosRefeshToken) => {
    try {
        const res = await axiosRefeshToken.post("api/category/get-update",
            {
                id: id
            }, {
            headers: {
                token: `Bearer ${accessToken}`,
            },

        });
        dispatch(categoryUpdate(res.data));
        console.log(res.data)
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        console.log(error);
    }
}

export const updateCategory = async (category, dispatch, navigate, accessToken, axiosRefeshToken) => {
    try {
        const res = await axiosRefeshToken.post("api/category/update", category, {
            headers: {
                token: `Bearer ${accessToken}`,
            }
        });
        toast.success(res.data.message);
        dispatch(categoryUpdateSuccessfully());
        getAllCategory(dispatch)//cập nhật lại state luu list category
        navigate('/admin/category')
    } catch (error) {
        // neu res 40x thi no chay vao day, lay response tu error
        toast.error(error.response?.data.message)
        console.log(error);
    }
}