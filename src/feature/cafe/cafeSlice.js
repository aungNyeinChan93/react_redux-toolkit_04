import { createSlice } from "@reduxjs/toolkit";


const cafeSlice = createSlice({
    name: 'cafe',
    initialState: {
        cakes: 100,
        coffee: 100,
        test: ' Hello world!'
    },
    reducers: {
        orderCake(state, action) {
            state.cakes = state.cakes - action.payload
        },
        orderCoffee(state, action) {
            state.coffee = state.coffee - action.payload
        },
        fillCake(state, action) {
            state.cakes = state.cakes + action.payload
        },
        fillCoffee(state, action) {
            state.coffee = state.coffee + action.payload
        },
        addTest: (state) => {
            state.test = 'hihi';
        }
    }
});


export default cafeSlice;
export const { fillCake, fillCoffee, orderCake, orderCoffee, addTest } = cafeSlice.actions;