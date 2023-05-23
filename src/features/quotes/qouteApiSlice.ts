// **@reduxjs/toolkit hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// **defining the expected data type from the API
export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string [];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

// **define the api slice
export const quoteApi = createApi({
  reducerPath: 'quoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.quotable.io' }),
  // **define query point 
  endpoints(builder) {
    return {
      fetchRandomQuote: builder.query<Quote[], number | number | void>({
        // **specify path to fetch data from
        // **added min & max length query parameters 
        query: (minLength=80, maxLength=100) => `/quotes/random?minLength=${minLength}&maxLength=${maxLength}`,
      }),
    };
  },
});

// **export the automatically created hook query
export const { useFetchRandomQuoteQuery } = quoteApi;
