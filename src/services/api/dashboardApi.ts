import { apiSlice } from "./apiSlice";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

interface Cart {
  id: number;
  total: number;
}

interface UsersResponse {
  users: User[];
}

interface ProductsResponse {
  products: Product[];
}

interface CartsResponse {
  carts: Cart[];
}

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, void>({
      query: () => "/users",
    }),

    getProducts: builder.query<ProductsResponse, void>({
      query: () => "/products",
    }),

    getCarts: builder.query<CartsResponse, void>({
      query: () => "/carts",
    }),
  }),
});

export const { useGetUsersQuery, useGetProductsQuery, useGetCartsQuery } =
  dashboardApi;
