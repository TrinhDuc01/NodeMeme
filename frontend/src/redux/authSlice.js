import { createSlice } from '@reduxjs/toolkit'

const authSilce = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true
            state.login.currentUser = null;
            state.login.error = false
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = true
        },
        logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },

    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    logoutSuccess,
} = authSilce.actions;

export default authSilce.reducer