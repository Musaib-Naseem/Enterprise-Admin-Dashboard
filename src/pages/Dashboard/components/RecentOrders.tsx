type RecentOrderItem = {
  id: number;
  total: number;
};

type RecentOrdersProps = {
  recentOrders: RecentOrderItem[];
};

const RecentOrders = ({ recentOrders }: RecentOrdersProps) => {
  return (
    <div className="flex h-80 flex-col rounded-xl bg-white p-6 shadow">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>

          <p className="text-sm text-gray-500">Latest customer purchases</p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-3 border-b pb-3 text-sm font-semibold text-gray-500">
        <span>Order ID</span>
        <span className="text-center">Status</span>
        <span className="text-right">Amount</span>
      </div>

      {/* Orders */}
      <div className="mt-2 flex-1 overflow-y-auto">
        {recentOrders.length === 0 ? (
          <div className="flex h-full items-center justify-center text-gray-400">
            No recent orders found.
          </div>
        ) : (
          recentOrders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-3 items-center border-b py-4 last:border-none"
            >
              <div>
                <p className="font-medium text-gray-900">#{order.id}</p>

                <p className="text-xs text-gray-500">Order</p>
              </div>

              <div className="flex justify-center">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Completed
                </span>
              </div>

              <div className="text-right font-semibold text-gray-900">
                ${order.total.toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentOrders;
