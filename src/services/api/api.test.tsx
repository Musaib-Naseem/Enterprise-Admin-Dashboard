import { http, HttpResponse } from "msw";
import { server } from "../../test/server";
import { store } from "../../store";
import { authApi } from "./authApi";

test("login success", async () => {
  server.use(
    http.post("https://dummyjson.com/auth/login", () => {
      return HttpResponse.json({
        accessToken: "token123",
        refreshToken: "refresh123",
        id: 1,
        username: "emilys",
        email: "emily@example.com",
        role: "admin",
      });
    }),
  );

  const result = await store.dispatch(
    authApi.endpoints.login.initiate({
      username: "emilys",
      password: "emilyspass",
    }),
  );

  expect(result.data?.accessToken).toBe("token123");
  expect(result.data?.role).toBe("admin");
});

test("Login failure", async () => {
  server.use(
    http.post("https://dummyjson.com/auth/login", () => {
      return HttpResponse.json(
        {
          message: "Invalid credential",
        },
        {
          status: 400,
        },
      );
    }),
  );

  const result = await store.dispatch(
    authApi.endpoints.login.initiate({
      username: "wrong",
      password: "wrong",
    }),
  );

  expect(result.error).toBeDefined();
});

test("401 response", async () => {
  server.use(
    http.post("https://dummyjson.com/auth/login", () => {
      return HttpResponse.json(
        {
          message: "Invalid credential",
        },
        {
          status: 401,
        },
      );
    }),
  );

  const result = await store.dispatch(
    authApi.endpoints.login.initiate({
      username: "abc",
      password: "123",
    }),
  );

  expect(result.error).toEqual(expect.objectContaining({ status: 401 }));
});

test("500 response", async () => {
  server.use(
    http.post("https://dummyjson.com/auth/login", () => {
      return HttpResponse.json(
        {
          message: "Internal Server Error",
        },
        {
          status: 500,
        },
      );
    }),
  );

  const result = await store.dispatch(
    authApi.endpoints.login.initiate({
      username: "abc",
      password: "123",
    }),
  );

  expect(result.error).toEqual(expect.objectContaining({ status: 500 }));
});
