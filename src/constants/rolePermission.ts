import { Permission } from "./Permission";
import { ROLES } from "./roles";

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    Permission.READ_USERS,
    Permission.CREATE_USERS,
    Permission.UPDATE_USERS,
    Permission.DELETE_USERS,

    Permission.READ_PRODUCTS,
    Permission.CREATE_PRODUCTS,
    Permission.UPDATE_PRODUCTS,
    Permission.DELETE_PRODUCTS,
  ],
  [ROLES.MANAGER]: [
    Permission.READ_USERS,
    Permission.UPDATE_USERS,

    Permission.READ_PRODUCTS,
    Permission.UPDATE_PRODUCTS,
  ],
  [ROLES.USER]: [Permission.READ_USERS, Permission.READ_PRODUCTS],
};
