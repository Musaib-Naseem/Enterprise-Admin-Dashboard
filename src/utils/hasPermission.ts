import { ROLE_PERMISSIONS } from "../constants/rolePermission";
import type { PERMISSION } from "../constants/Permission";

export const hasPermission = (
  role: keyof typeof ROLE_PERMISSIONS,
  permission: PERMISSION,
) => {
  return ROLE_PERMISSIONS[role]?.includes(permission);
};
