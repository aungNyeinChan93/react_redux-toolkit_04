import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk('photos/fetchPhotos', async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    return data;
});

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.photos = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
    }
});

export default photoSlice;