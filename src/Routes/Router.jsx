import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Domain from "../Pages/Domain";
import Gif from "../Pages/Gif";
import Home from "../Pages/Home";
import Library from "../Pages/Library";

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
]);
