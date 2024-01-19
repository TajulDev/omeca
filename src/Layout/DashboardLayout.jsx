import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex h-full pt-[82px]">
        <Sidebar />
        <div className="overflow-y-auto w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
