import { kpiData } from "../dashboardData";
import KPICard from "./KPICard";

const KPISection = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {kpiData.map((item) => (
        <KPICard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default KPISection;
