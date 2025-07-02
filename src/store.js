import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice';
import userSlice from './feature/user/userSlice';
import productSlice from './feature/product/productSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer,
        product: productSlice.reducer,

    }
});

