import { Outlet, RouteObject } from "react-router-dom";
import UsersContainer from "../components/UsersContainer";
import UserContainer from "../components/UserContainer";
import { fetchUser } from "../Models/User";

const routes: RouteObject = {
  path: "/users",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <UsersContainer />,
    },
    {
      path: ":id",
      element: <UserContainer />,
      errorElement: <p>User not found</p>,
      loader: async ({ params }) => ({
        user: await fetchUser(Number(params.id)),
      }),
    },
  ],
};

export default routes;
