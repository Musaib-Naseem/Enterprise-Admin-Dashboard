import { apiSlice } from "./apiSlice";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  role: "admin" | "manager" | "user";
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
