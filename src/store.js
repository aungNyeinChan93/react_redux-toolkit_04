import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './feature/counter/counterSlice';
import userSlice from './feature/user/userSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    }
});

