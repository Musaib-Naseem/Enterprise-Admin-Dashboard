type props = {
  title: string;
  value: string;
  growth: string;
};

const KPICard = ({ title, value, growth }: props) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <p className="text-gray-500">{title}</p>

      <h2 className="mt-2 text-3xl font-bold"> {value} </h2>

      <span className="text-green-600">{growth}</span>
    </div>
  );
};

export default KPICard;
