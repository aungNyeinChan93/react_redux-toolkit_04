import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDogs = createAsyncThunk('dogs/fetchDogs', async () => {
    const response = await fetch(`https://dog.ceo/api/breed/hound/images`);
    const { message } = await response.json();
    return message;
})

const dogsSlice = createSlice({
    name: 'dogs',
    initialState: {
        dogs: [],
        isLoading: true,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dogs = action?.payload;
            })
            .addCase(fetchDogs.rejected, (state, action) => {
                state.error = action?.error?.message;
            })
    }

});


export default dogsSlice;