import { createSlice } from '@reduxjs/toolkit'

const colorSlice = createSlice({
    name: 'color',
    initialState: {
        currentColor: {
            backgroundColor: '#FFF2D8',
            itemColor: '#EAD7BB',
            buttonColor: '#BCA37F',
            textColor: '#113946',
            theme: "brown"
        }
    },
    reducers: {
        colorSuccess: (state, action) => {
            state.currentColor = action.payload;
        }
    }
})

export const {
    colorSuccess,
} = colorSlice.actions;

export default colorSlice.reducer