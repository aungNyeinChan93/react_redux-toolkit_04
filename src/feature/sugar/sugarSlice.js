import { createSlice } from "@reduxjs/toolkit";
import { orderCoffee } from "../cafe/cafeSlice";

const sugarSlice = createSlice({
    name: 'sugar',
    initialState: {
        sugar: 1000,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(orderCoffee, (state) => {
            state.sugar = state.sugar - 2;
        })
    }
});


export default sugarSlice;