import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Domain from "../Pages/Domain";
import DashboardLayout from "../Layout/DashboardLayout";
import Goal from "../Pages/Goal";
import Prompts from "../Pages/Prompts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/domain",
        element: <Domain />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/goal",
        element: <Goal />,
      },
      {
        path: "/dashboard/prompts",
        element: <Prompts />,
      },
    ],
  },
]);
