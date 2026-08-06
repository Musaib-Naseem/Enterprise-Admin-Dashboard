import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex h-screen fixed left-0 top-0">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col ml-64">
        <Header />
        <main className="bg-green-100 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
