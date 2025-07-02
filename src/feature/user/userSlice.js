import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'aung nyien chan',
        email: 'chan@123',
        skill: ['java', 'js', 'ts', 'html', 'css', 'ract', 'node']
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeEmail: (state, action) => {
            if (action.type == "user/changeEmail") {
                state.email = action.payload
            }
        }
    }
});

export default userSlice;
export const { changeName, changeEmail } = userSlice.actions;