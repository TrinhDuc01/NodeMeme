import { createSlice } from '@reduxjs/toolkit'

const memeSlice = createSlice({
    name: 'meme',
    initialState: {
        listMeme: [

        ],
        createMeme: {
            showModal: false
        }
    },
    reducers: {
        memeListSuccess: (state, action) => {
            state.listMeme = action.payload;
        },
        memeCreate: (state) => {
            state.createMeme.showModal= true;
        },
        memeCreateSuccessfully: (state) => {
            state.createMeme.showModal = false;
        },
    }
})

export const {
    memeListSuccess,
    memeCreate,
    memeCreateSuccessfully
} = memeSlice.actions;

export default memeSlice.reducer