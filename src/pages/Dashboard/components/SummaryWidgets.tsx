import ActiveUsers from "./ActiveUsers";
import RecentOrders from "./RecentOrders";
import RevenueChart from "./RevenueCharts";
import SalesChart from "./SalesChart";

type Cart = {
  id: number;
  total: number;
};

type props = {
  sales: Cart[];
  revenue: number;
  activeUsers: number;
  recentOrders: Cart[];
};

const SummaryWidget = ({
  sales,
  revenue,
  activeUsers,
  recentOrders,
}: props) => {
  return (
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
      <div className="xl:col-span-2 rounded-xl bg-white p-6 shadow">
        <SalesChart sales={sales} />
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <ActiveUsers activeUsers={activeUsers} />
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <RevenueChart revenue={revenue} />
      </div>
      <div className="xl:col-span-2 rounded-xl bg-white p-6 shadow">
        <RecentOrders recentOrders={recentOrders} />
      </div>
    </div>
  );
};

export default SummaryWidget;
