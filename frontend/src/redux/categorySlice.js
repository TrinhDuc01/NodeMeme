import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        listCategory: [

        ],
        categoryUpdate: {

        }
    },
    reducers: {
        categoryListSuccess: (state, action) => {
            state.listCategory = action.payload;
        },
        categoryUpdate: (state, action) => {
            state.categoryUpdate = action.payload;
        },
    }
})

export const {
    categoryListSuccess
} = categorySlice.actions;

export default categorySlice.reducer