import React from 'react'
import Body from "../pages/Body";
import ListAudioMeme from "../pages/ListAudioMeme";
import ListImageMeme from "../pages/ListImageMeme";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Nav from "../nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryManage from "../pages/CategoryManage";
import NavAdmin from "../nav/NavAdmin";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />} >
                    <Route index element={<Body />} />
                    <Route path="audio-meme" element={<ListAudioMeme />} />
                    <Route path="image-meme" element={<ListImageMeme />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/admin/" element={<NavAdmin />}>
                    <Route index element={<CategoryManage />} />
                    <Route path="category" element={<CategoryManage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
