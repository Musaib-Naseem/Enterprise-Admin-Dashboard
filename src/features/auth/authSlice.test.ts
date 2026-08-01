import { describe, expect, test } from "vitest";
import authReducer, {
  loginSuccess,
  logout,
  setLoading,
  type LoginResponse,
} from "./authSlice";

describe("authSlice", () => {
  const initialState = {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    loading: false,
  };

  const mockUser: LoginResponse = {
    id: 1,
    username: "emilys",
    email: "emily@example.com",
    role: "admin",
    accessToken: "access-token",
    refreshToken: "refresh-token",
  };

  test("loginSuccess", () => {
    const state = authReducer(initialState, loginSuccess(mockUser));
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).toEqual(mockUser);
    expect(state.accessToken).toBe("access-token");
    expect(state.loading).toBe(false);
  });

  test("logout", () => {
    const loggedInState = authReducer(initialState, loginSuccess(mockUser));

    const state = authReducer(loggedInState, logout());

    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
    expect(state.accessToken).toBeNull();
  });

  test("setLoading", () => {
    const state = authReducer(initialState, setLoading(true));

    expect(state.loading).toBe(true);
  });
});
