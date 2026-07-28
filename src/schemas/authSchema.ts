import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2, "Invalid Username Address"),

  password: z.string().min(6, "Password must be atleast 6 character"),

  rememberMe: z.boolean(),
});
