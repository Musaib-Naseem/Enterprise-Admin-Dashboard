import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

interface protectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoutes = ({ children }: protectedRouteProps) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  console.log("ProtectedRoutes:", isAuthenticated);

  if (!isAuthenticated) {
    console.log("Redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Rendering protected page");

  return <>{children}</>;
};

export default ProtectedRoutes;
