import { Outlet, RouteObject } from "react-router-dom";
import { lazy } from "react";
import App from "../../App";
import chapterTwo from "./chapterTwo";
import chapterThree from "./chapterThree";
import chapterFive from "./chapterFive";
import routeOne from "../one";
import routeTwo from "../two";
import chapterSeven from "./chapterSeven";
import Echo from "../components/Echo";
import TabsComponent from "../components/TabsComponent";
import Controls from "../Controls";
import Theming from "../Theming";
const MyComponent = lazy(() => import("../MyComponent"));
const routes: RouteObject = {
  path: "material-ui",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <App />,
    },
    {
      path: "tabs",
      element: <TabsComponent />,
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
        {
          path: "lazy",
          element: (
            <MyComponent title="Lazy" description="Loading using Lazy API" />
          ),
        },
        {
          path: "suspense",
          element: (
            <MyComponent
              title="Suspense"
              description="Loading using Lazy API with suspense"
            />
          ),
        },
        {
          path: "controls",
          element: <Controls />,
        },
        {
          path: "theming",
          element: <Theming />,
        },
      ],
    },
  ],
};

export default routes;
