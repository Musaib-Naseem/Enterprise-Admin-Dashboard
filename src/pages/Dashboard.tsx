import { ROLES } from "../constants/roles";
import { useAppSelector } from "../hooks";

const Dashboard = () => {
  const data = useAppSelector((state) => state.auth.isAuthenticated);

  const user = useAppSelector((state) => state.auth.user);

  return (
    <>
      <h1> Dashboard </h1>

      {user?.role === ROLES.ADMIN && <h2> I am User </h2>}

      <h2>{data ? "true" : "false"}</h2>
    </>
  );
};

export default Dashboard;
