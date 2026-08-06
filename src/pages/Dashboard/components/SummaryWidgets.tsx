import ActiveUsers from "./ActiveUsers";
import RecentOrders from "./RecentOrders";
import RevenueChart from "./RevenueCharts";
import SalesChart from "./SalesChart";

const SummaryWidget = () => {
  return (
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
      <div className="xl:col-span-2 rounded-xl bg-white p-6 shadow">
        <SalesChart />
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <ActiveUsers />
      </div>
      <div className="rounded-xl bg-white p-6 shadow">
        <RevenueChart />
      </div>
      <div className="xl:col-span-2 rounded-xl bg-white p-6 shadow">
        <RecentOrders />
      </div>
    </div>
  );
};

export default SummaryWidget;
