import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";

type Props = {
  allowedRoles: string[];
};

const RoleProtectedRoutes = ({ allowedRoles }: Props) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorised" replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoutes;
