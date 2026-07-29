export const Permission = {
  READ_USERS: "read:users",
  CREATE_USERS: "create:users",
  UPDATE_USERS: "update:users",
  DELETE_USERS: "delete:users",

  READ_PRODUCTS: "read:products",
  CREATE_PRODUCTS: "create:products",
  UPDATE_PRODUCTS: "update:products",
  DELETE_PRODUCTS: "delete:products",
} as const;

export type PERMISSION = (typeof Permission)[keyof typeof Permission];
