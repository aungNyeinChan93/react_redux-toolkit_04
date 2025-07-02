import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [{ name: 'products_1' }, { name: 'product-2' }]
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
            state.products = state.products.filter(p => p.name !== action.payload);
        }
    }
});


export default productSlice;
export const { addProduct, getProducts, dropProduct } = productSlice.actions;