import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
