// import { ROLES } from "../../constants/roles";
// import { useAppSelector } from "../../hooks";
// import { Permission } from "../../constants/Permission";
// import { hasPermission } from "../../utils/hasPermission";
// import Button from "../../components/ui/Button/Button";
// import Input from "../../components/ui/Input/Input";
// import Card from "../../components/ui/Card/Card";
// import Badge from "../../components/ui/Badge/Badge";

// import Modal from "../../components/ui/Modal/Modal";

import KPISection from "./components/KPISections";
import SummaryWidget from "./components/SummaryWidgets";
import {
  useGetCartsQuery,
  useGetProductsQuery,
  useGetUsersQuery,
} from "../../services/api/dashboardApi";
import Spinnner from "../../components/ui/Spinner/Spinner";

const Dashboard = () => {
  // const data = useAppSelector((state) => state.auth.isAuthenticated);

  // const user = useAppSelector((state) => state.auth.user);

  // const canDelete = user && hasPermission(user.role, Permission.READ_PRODUCTS);

  // const showDeleteModal = false;

  const userQuery = useGetUsersQuery();
  const productQuery = useGetProductsQuery();
  const cartQuery = useGetCartsQuery();

  if (userQuery.isLoading || productQuery.isLoading || cartQuery.isLoading) {
    return <Spinnner />;
  }

  if (userQuery.error || productQuery.error || cartQuery.error) {
    return <p>Something went wrong</p>;
  }

  const revenue =
    cartQuery.data?.carts.reduce((sum, cart) => sum + cart.total, 0) ?? 0;

  const activeUsers = Math.floor(userQuery.data?.users.length ?? 0) * 0.7;

  const kpiData = [
    {
      title: "Revenue",
      value: `$${revenue}`,
      growth: "+15%",
    },

    {
      title: "Orders",
      value: `${cartQuery.data?.carts.length ?? 0}`,
      growth: "+7%",
    },

    {
      title: "Users",
      value: `${userQuery.data?.users.length ?? 0}`,
      growth: "+11%",
    },

    {
      title: "Active Users",
      value: `${activeUsers}`,
      growth: "+4%",
    },
  ];

  return (
    <div className="space-y-6 p-4">
      <KPISection kpiData={kpiData} />

      <SummaryWidget
        sales={cartQuery.data?.carts ?? []}
        revenue={revenue}
        activeUsers={activeUsers}
        recentOrders={cartQuery.data?.carts.slice(0, 5) ?? []}
      />

      {/* <Button variant="danger"> Cancel </Button>
      <Input label="Email" placeholder="Enter Email" />
      <Card>Hello World</Card>
      <Badge text="musaib" />
      <Spinnner />
      <Modal open={showDeleteModal}>My Open Modal</Modal>

      {user?.role === ROLES.ADMIN && <h2> I am User </h2>}

      <h2>{data ? "true" : "false"}</h2>

      {canDelete && <h1> I am on checking version </h1>} */}
    </div>
  );
};

export default Dashboard;
