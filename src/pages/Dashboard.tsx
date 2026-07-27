import { useAppSelector } from "../hooks";

const Dashboard = () => {
  const data = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <h1> Dashboard </h1>

      <h2>{data ? "true" : "false"}</h2>
    </>
  );
};

export default Dashboard;
