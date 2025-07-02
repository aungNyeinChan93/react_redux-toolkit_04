import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=30`);
    return await response.json();
});

const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCats.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cats = action.payload;
            })
            .addCase(fetchCats.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
});

export default catsSlice;