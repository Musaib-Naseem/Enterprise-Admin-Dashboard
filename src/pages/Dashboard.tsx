import { ROLES } from "../constants/roles";
import { useAppSelector } from "../hooks";
import { Permission } from "../constants/Permission";
import { hasPermission } from "../utils/hasPermission";

const Dashboard = () => {
  const data = useAppSelector((state) => state.auth.isAuthenticated);

  const user = useAppSelector((state) => state.auth.user);

  const canDelete = user && hasPermission(user.role, Permission.READ_PRODUCTS);

  return (
    <>
      <h1> Dashboard </h1>

      {user?.role === ROLES.ADMIN && <h2> I am User </h2>}

      <h2>{data ? "true" : "false"}</h2>

      {canDelete && <h1> I am on checking version </h1>}
    </>
  );
};

export default Dashboard;
