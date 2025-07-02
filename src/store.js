import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice';
import userSlice from './feature/user/userSlice';
import productSlice from './feature/product/productSlice';
import postsSlice from './feature/posts/postsSlice';
import catsSlice from './feature/cats/catsSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer,
        product: productSlice.reducer,
        posts: postsSlice.reducer,
        cats: catsSlice.reducer
    }
});

