import { createSlice } from '@reduxjs/toolkit'

const getFetchProducts = async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (!response.ok) {
            throw new Error('get products fail!')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message)
    }
}
const products = await getFetchProducts();

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products
    },
    reducers: {
        getProducts: (state) => {
            return state.products;
        },
        addProduct: (state, action) => {
            if (action.type == 'product/addProduct') {
                state.products.push(action.payload);
            }
        },
        dropProduct: (state, action) => {
            state.products = state.products.filter(p => p.title !== action.payload);
        }
    }
});


export default productSlice;
export const { addProduct, getProducts, dropProduct } = productSlice.actions;