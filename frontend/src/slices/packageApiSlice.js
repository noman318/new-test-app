import { PACKAGE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const packageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPackages: builder.query({
      query: () => ({
        url: PACKAGE_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),
    getPackageById: builder.query({
      query: (packageId) => ({
        url: `${PACKAGE_URL}/${packageId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductByCategoryName: builder.query({
      query: (name) => ({
        url: `${PACKAGE_URL}/?category=${name}`,
      }),
      keepUnusedDataFor: 5,
    }),
    deletePackageById: builder.mutation({
      query: (packageId) => ({
        url: `${PACKAGE_URL}/${packageId}`,
        method: "DELETE",
      }),
    }),
    createPackage: builder.mutation({
      query: (data) => ({
        url: PACKAGE_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PACKAGE_URL}/${data?.packageId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    createProductReview: builder.mutation({
      query: (data) => ({
        url: `${PACKAGE_URL}/${data?.packageId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getTopProduct: builder.query({
      query: () => ({
        url: `${PACKAGE_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetAllPackagesQuery,
  useGetPackageByIdQuery,
  useUpdateProductMutation,
  useCreateProductReviewMutation,
  useGetTopProductQuery,
  useGetProductByCategoryNameQuery,
  useCreatePackageMutation,
  useDeletePackageByIdMutation,
} = packageApiSlice;
