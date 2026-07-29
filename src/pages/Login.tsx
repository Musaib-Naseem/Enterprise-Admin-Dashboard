import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";
import { useLoginMutation } from "../services/api/authApi";
import { loginSuccess } from "../features/auth/authSlice";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { LoginResponse } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();

  type LoginFormData = {
    username: string;
    password: string;
    rememberMe: boolean;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await login(data).unwrap();

      const userOne: LoginResponse = {
        ...response,
        role: response.username == "emilys" ? "admin" : "user",
      };

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem("refreshToken", response.refreshToken);

      console.log(userOne);
      dispatch(loginSuccess(userOne));

      navigate("/dashboard");
      toast.success("Login Successful");
    } catch (error) {
      const err = error as FetchBaseQueryError;

      if ("status" in err) {
        switch (err.status) {
          case 400:
            toast.error("Invalid username or password");
            break;

          case 401:
            toast.error("Unauhorised User");
            break;

          case 404:
            toast.error("User not found");
            break;

          case 500:
            toast.error("Server error. Please try again later.");
            break;

          default:
            toast.error("Login failed");
        }
      }
    }
  };

  const [login, { isLoading }] = useLoginMutation();

  return (
    <div className="h-screen w-screen bg-gray-900">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h1 className="mt-8 text-center font-bold text-white text-3xl">
            Enterprise Admin Dashboard
          </h1>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to continue to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                UserName
              </label>
              <div className="mt-2">
                <input
                  {...register("username")}
                  id="username"
                  name="username"
                  type="text"

                  autoComplete="username"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("password")}
                  id="password"
                  name="password"
                  type="password"

                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <p className="mt-10 text-center text-sm/6 text-gray-400">
              <label>
                <input type="checkbox" {...register("rememberMe")} />
                Remember me
              </label>
            </p>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="cursor-pointer flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>

              <div className="mt-4 text-gray-600">
                <span className="cursor-pointer text-white font-bold hover:underline">
                  Sign Up
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
