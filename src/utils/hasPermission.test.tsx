import { hasPermission } from "./hasPermission";
import { Permission } from "../constants/Permission";

describe("Has Permission", () => {
  test("admin can delete", () => {
    expect(hasPermission("admin", Permission.DELETE_USERS)).toBe(true);
  });

  test("Manager cannnot delete", () => {
    expect(hasPermission("manager", Permission.DELETE_PRODUCTS)).toBe(false);
  });

  test("User can read", () => {
    expect(hasPermission("user", Permission.READ_USERS)).toBe(true);
  });
});
