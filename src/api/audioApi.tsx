import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const audioApi = createApi({
  reducerPath: 'audioApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAudios: builder.query({
      query: ({ page = 1, limit = 10 }) => `albums?_page=${page}&_limit=${limit}`,
    }),
  }),
});

export const { useGetAudiosQuery } = audioApi;
