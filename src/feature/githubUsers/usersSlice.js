import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch(`https://api.github.com/users`);
    return await response.json();
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export default usersSlice;