import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  username: string;
  email: string;
  role: "admin" | "manager" | "user";
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  role: "admin" | "manager" | "user";
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  accessToken: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.accessToken = action.payload.accessToken;
    },

    logout: (state) => {
      ((state.isAuthenticated = false),
        (state.accessToken = null),
        (state.user = null));
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    restoreSession: (state, action: PayloadAction<string>) => {
      ((state.isAuthenticated = true), (state.accessToken = action.payload));
    },
  },
});

export const { loginSuccess, logout, setLoading, restoreSession } =
  authSlice.actions;

export default authSlice.reducer;
