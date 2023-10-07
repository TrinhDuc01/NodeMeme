import { configureStore } from "@reduxjs/toolkit";
import authSilce from './authSlice'
const store = configureStore({
    reducer: {
        auth: authSilce,
    }
})

export default store;