type ActiveUsersProps = {
  activeUsers: number;
};

const ActiveUsers = ({ activeUsers }: ActiveUsersProps) => {
  const targetUsers = 500;
  const percentage = Math.min((activeUsers / targetUsers) * 100, 100);

  return (
    <div className="flex h-80 flex-col rounded-xl bg-white p-6 shadow">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Active Users</h2>

          <p className="text-sm text-gray-500">Users currently active</p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          +8.4%
        </span>
      </div>

      {/* Main Count */}
      <div className="mt-8">
        <h1 className="text-5xl font-bold text-gray-900">
          {activeUsers.toLocaleString()}
        </h1>

        <p className="mt-2 text-sm text-gray-500">Active sessions today</p>
      </div>

      {/* Progress */}
      <div className="mt-10">
        <div className="mb-2 flex justify-between text-sm text-gray-500">
          <span>Daily Target</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>

        <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto rounded-lg bg-gray-50 p-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-green-600">{activeUsers}</span>{" "}
          users are currently online.
        </p>
      </div>
    </div>
  );
};

export default ActiveUsers;
