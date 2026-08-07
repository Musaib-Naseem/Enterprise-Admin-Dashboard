type RevenueChartProps = {
  revenue: number;
};

const RevenueChart = ({ revenue }: RevenueChartProps) => {
  const target = 50000;
  const percentage = Math.min((revenue / target) * 100, 100);

  return (
    <div className="flex h-80 flex-col rounded-xl bg-white p-6 shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Revenue</h2>

          <p className="text-sm text-gray-500">Total revenue generated</p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          +14.8%
        </span>
      </div>

      {/* Revenue */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900">
          ${revenue.toLocaleString()}
        </h1>

        <p className="mt-2 text-sm text-gray-500">This month's revenue</p>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
          <span>Monthly Target</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Footer Stats */}
      <div className="mt-auto grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Average Order
          </p>

          <p className="mt-1 text-lg font-semibold text-gray-900">$125</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            Target Left
          </p>

          <p className="mt-1 text-lg font-semibold text-gray-900">
            ${(target - revenue).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
