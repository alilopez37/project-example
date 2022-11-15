import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer'

export const Store = configureStore({
    //Declaramos nuestro reducer
    reducer : {
        counter : productReducer,
    },
});

