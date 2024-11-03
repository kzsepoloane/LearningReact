import { Navigate, Outlet, RouteObject } from "react-router-dom";
import First from "./First";
import Second from "./Second";

const routes: RouteObject = {
  path: "/two",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Navigate to="/one/1" />,
    },
    {
      path: "1",
      element: <First />,
    },
    {
      path: "2",
      element: <Second />,
    },
  ],
};

export default routes;
