import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import jwt_decode from "jwt-decode";


export default function CategoryManage() {
    
    const naviagte = useNavigate();
    const user = useSelector(state => state.auth.login.currentUser);
    const decode = jwt_decode(user?.accessToken)// giai ma lay payload cua access token
    
    useEffect(() => {
        if (!decode.isadmin) naviagte('/') // khong phai admin thi ve trang chu
    }, [])
    
    return (
        <div>CategoryManage</div>
    )
}
