import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Setting from "../pages/Setting";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users";
import ProtectedRoutes from "./ProtectedRoutes";
import Unauthorised from "../pages/Unauthorised";
import RoleProtectedRoutes from "./RoleProtectedRoutes";
import { ROLES } from "../constants/roles";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/unauthorised" element={<Unauthorised />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              element={<RoleProtectedRoutes allowedRoles={[ROLES.ADMIN]} />}
            >
              <Route path="/users" element={<Users />} />
            </Route>
            <Route
              element={<RoleProtectedRoutes allowedRoles={[ROLES.USER]} />}
            >
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/setting" element={<Setting />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
