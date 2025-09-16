// context/api/productApi.js
import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBazsStations: builder.query({
      query: () => '/bazs-stations',
    }),
    getBazsStationById: builder.query({
      query: (id) => `/bazs-stations/${id}`,
    }),
    createBazsStation: builder.mutation({
      query: (body) => ({
        url: '/bazs-stations',
        method: 'POST',
        body,
      }),
    }),
    updateBazsStation: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/bazs-stations/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteBazsStation: builder.mutation({
      query: (id) => ({
        url: `/bazs-stations/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetBazsStationsQuery,
  useGetBazsStationByIdQuery,
  useCreateBazsStationMutation,
  useUpdateBazsStationMutation,
  useDeleteBazsStationMutation,
} = productApi;

