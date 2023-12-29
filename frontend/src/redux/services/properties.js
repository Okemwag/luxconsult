import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertiesApi = createApi({
  reducerPath: "propertiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/core/" }),
  endpoints: (builder) => ({
    getForRent: builder.query({
      query: () => `for-rent/`,
    }),
    getForSale: builder.query({
      query: () => `for-sale/`,
    }),
    getDetails: builder.query({
      query: (id) => `detail/${id}/`,
    }),
  }),
});

export const { useGetForRentQuery, useGetForSaleQuery, useGetDetailsQuery } = propertiesApi;
