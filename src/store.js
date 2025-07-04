import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice';
import userSlice from './feature/user/userSlice';
import productSlice from './feature/product/productSlice';
import postsSlice from './feature/posts/postsSlice';
import catsSlice from './feature/cats/catsSlice';
import dogsSlice from './feature/dogs/dogsSlice';
import cafeSlice from './feature/cafe/cafeSlice';
import logger from 'redux-logger';
import sugarSlice from './feature/sugar/sugarSlice';
import usersSlice from './feature/githubUsers/usersSlice';
import photoSlice from './feature/photo/photoSlice';
import recipeSlice from './feature/recipe/recipeSlice';
import userApi from './services/userApi';
import quoteApi from './services/quoteApi';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer,
        product: productSlice.reducer,
        posts: postsSlice.reducer,
        cats: catsSlice.reducer,
        dogs: dogsSlice.reducer,
        users: usersSlice.reducer,
        cafe: cafeSlice.reducer,
        sugar: sugarSlice.reducer,
        photos: photoSlice.reducer,
        recipes: recipeSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [quoteApi.reducerPath]: quoteApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger, userApi.middleware, quoteApi.middleware)
    }
});

