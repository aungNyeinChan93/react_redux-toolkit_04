import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users'
        }),
        getUser: builder.query({
            query: (id) => `users/${id}`
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: 'users',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newUser)
            })
        })
    })
});

export default userApi;
export const { useGetUsersQuery, useCreateUserMutation, useGetUserQuery } = userApi;