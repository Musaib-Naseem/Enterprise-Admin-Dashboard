import { apiSlice } from "./apiSlice";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
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

// After the login API works, the typical enterprise sequence is:

// ✅ Save the JWT access token.
// ✅ Update the Redux auth state (isAuthenticated, user).
// ✅ Redirect the user to the dashboard.
// ✅ Handle login errors with user-friendly messages.
// ✅ Add logout and protected routes.
