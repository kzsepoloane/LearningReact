import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import App from "../App";
import chapterTwo from "./routes/chapterTwo";
import chapterThree from "./routes/chapterThree";
import chapterFive from "./routes/chapterFive";
import chapterSeven from "./routes/chapterSeven";
import routeOne from "./one";
import routeTwo from "./two";
import Echo from "./components/Echo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      chapterTwo,
      chapterThree,
      chapterFive,
      routeOne,
      routeTwo,
      chapterSeven,
      {
        path: "echo",
        element: <Echo />,
      },
      {
        path: "echo/:msg",
        element: <Echo />,
      },
    ],
  },
]);
const SimpleRouter = () => {
  return <RouterProvider router={router} />;
};

export default SimpleRouter;
