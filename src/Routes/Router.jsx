import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Domain from "../Pages/Domain";
import Gif from "../Pages/Gif";
import Home from "../Pages/Home";
import Library from "../Pages/Library";
import DashboardLayout from "../Layout/DashboardLayout";
import Goal from "../Pages/Goal";
import Prompts from "../Pages/Prompts";
import DataSourch from "../Pages/DataSourch";

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
      {
        path: "/gif",
        element: <Gif />,
      },
      {
        path: "/library",
        element: <Library />,
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
        path: "/dashboard/data-source",
        element: <DataSourch />,
      },
      {
        path: "/dashboard/plan",
        element: <Prompts />,
      },
    ],
  },
]);
