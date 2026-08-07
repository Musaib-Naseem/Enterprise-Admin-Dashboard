type SalesItem = {
  id: number;
  total: number;
};

type SalesChartProps = {
  sales: SalesItem[];
};

const SalesChart = ({ sales }: SalesChartProps) => {
  const totalSales = sales.reduce((sum, item) => sum + item.total, 0);

  const maxTotal = Math.max(...sales.map((item) => item.total), 1);

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Sales Overview
          </h2>

          <p className="text-sm text-gray-500">
            Total sales from recent orders
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          +12.5%
        </span>
      </div>

      {/* Revenue */}
      <div className="mt-6">
        <h3 className="text-4xl font-bold text-gray-900">
          ${totalSales.toLocaleString()}
        </h3>

        <p className="mt-1 text-sm text-gray-500">Total Revenue</p>
      </div>

      {/* Chart */}
      <div className="mt-8 flex-1">
        <div className="flex h-40 items-end gap-3 border-b border-l border-gray-200 px-2 pb-2">
          {sales.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="flex flex-1 flex-col items-center justify-end"
            >
              <div
                className="w-full rounded-t-md bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                style={{
                  height: `${(item.total / maxTotal) * 400}px`,
                }}
              />

              <span className="mt-2 text-xs text-gray-500">{item.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
