import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        listCategory: [

        ],
        categoryUpdate: {
            update: {

            },
            showModalUpdateCategory: false
        }
    },
    reducers: {
        categoryListSuccess: (state, action) => {
            state.listCategory = action.payload;
        },
        categoryUpdate: (state, action) => {
            state.categoryUpdate.update = action.payload;
            state.categoryUpdate.showModalUpdateCategory = true;
        },
        categoryUpdateSuccessfully: (state) => {
            state.categoryUpdate.update = {};
            state.categoryUpdate.showModalUpdateCategory = false;
        },
    }
})

export const {
    categoryListSuccess,
    categoryUpdate,
    categoryUpdateSuccessfully
} = categorySlice.actions;

export default categorySlice.reducer