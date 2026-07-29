import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";

const ProtectedRoutes = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  console.log("ProtectedRoutes:", isAuthenticated);

  if (!isAuthenticated) {
    console.log("Redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Rendering protected page");

  return <Outlet />;
};

export default ProtectedRoutes;
