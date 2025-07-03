import { createSlice } from '@reduxjs/toolkit';
import { orderCake } from '../cafe/cafeSlice'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(orderCake, (state) => {
            state.count += 3000;
        })
    }

});

export default counterSlice;

export const { decrement, increment } = counterSlice.actions;