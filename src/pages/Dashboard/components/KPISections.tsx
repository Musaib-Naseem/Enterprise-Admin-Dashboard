import KPICard from "./KPICard";

type KPI = {
  title: string;
  value: string;
  growth: string;
};

type KPISectionProps = {
  kpiData: KPI[];
};

const KPISection = ({ kpiData }: KPISectionProps) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
      {kpiData.map((item) => (
        <KPICard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default KPISection;
