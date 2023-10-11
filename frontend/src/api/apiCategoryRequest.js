import { toast } from "react-toastify";

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