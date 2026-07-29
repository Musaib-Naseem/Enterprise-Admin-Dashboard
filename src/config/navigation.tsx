import { ROLES } from "../constants/roles";

export const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
    roles: [ROLES.ADMIN, ROLES.MANAGER, ROLES.USER],
  },

  {
    title: "Users",
    path: "/users",
    roles: [ROLES.ADMIN],
  },

  {
    title: "Products",
    path: "/products",
    roles: [ROLES.ADMIN, ROLES.MANAGER],
  },

  {
    title: "Orders",
    path: "/orders",
    roles: [ROLES.ADMIN, ROLES.MANAGER],
  },

  {
    title: "Setting",
    path: "/setting",
    roles: [ROLES.ADMIN],
  },
];
