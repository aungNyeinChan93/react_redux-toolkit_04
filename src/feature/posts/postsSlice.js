import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk(`posts/fetchPosts`, async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?limit=10`);
    return await response.json();
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'success';
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});


export default postsSlice;
// https://jsonplaceholder.typicode.com/posts



