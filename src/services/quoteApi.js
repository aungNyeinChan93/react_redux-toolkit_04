import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const quoteApi = createApi({
    reducerPath: 'quoteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getQuotes: builder.query({ query: () => 'quotes' }),
        getQuote: builder.query({
            query: (id) => `quote/${id}`
        }),
        createQuote: builder.mutation({
            query: (newQuote) => ({
                url: 'quotes',
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newQuote)
            })
        })
    })
});

export default quoteApi;
export const { useGetQuoteQuery, useGetQuotesQuery, useCreateQuoteMutation } = quoteApi