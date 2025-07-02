import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    // user
    initialState: {
        name: 'aung nyien chan',
        email: 'chan@123',
        skill: ['java', 'js', 'ts', 'html', 'css', 'ract', 'node'],

    },
    //setUser 
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeEmail: (state, action) => {
            if (action.type == "user/changeEmail") {
                state.email = action.payload
            }
        },
        addSkill: (state, action) => {
            state.skill = [...state.skill, ...action.payload]
        },
        greet: (state) => {
            return `Hello ${state.name}`
        }

    }
});

export default userSlice;
export const { changeName, changeEmail, addSkill, greet } = userSlice.actions;