import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home";
import MainLayout from "../Components/Pages/Layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
