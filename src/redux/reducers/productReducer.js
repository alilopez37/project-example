import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value : 0
}

export const productReducer = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state)=> {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }

    }
});

export const {increment, decrement} = productReducer.actions;
export default productReducer.reducer;