import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import chapterTwo from "./routes/chapterTwo";
import chapterThree from "./routes/chapterThree";
import chapterFive from "./routes/chapterFive";
import chapterSeven from "./routes/chapterSeven";
import routeOne from "./one";
import routeTwo from "./two";
import Echo from "./components/Echo";
import { lazy } from "react";
import GridLayout from "./GridLayout";
import chapterNine from "./routes/chapterNine";
import BatchingUpdates from "./BatchingUpdates";
import StatePriority from "./StatePriority";
import StatePriorityAsync from "./StatePriorityAsync";
import FetchAPI from "./FetchAPI";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQuery from "./ReactQuery";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GraphQL from "./GraphQL";
const queryClient = new QueryClient();
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUBTOKEN}`,
  },
});

const MyComponent = lazy(() => import("./MyComponent"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <GridLayout />,
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
      chapterNine,
      {
        path: "batching",
        element: <BatchingUpdates />,
      },
      {
        path: "priority",
        element: <StatePriority />,
      },
      {
        path: "priority-async",
        element: <StatePriorityAsync />,
      },
      {
        path: "fetch-api",
        element: <FetchAPI />,
      },
      {
        path: "react-query",
        element: (
          <QueryClientProvider client={queryClient}>
            <ReactQuery />
          </QueryClientProvider>
        ),
      },
      {
        path: "apollo",
        element: (
          <ApolloProvider client={client}>
            <GraphQL />
          </ApolloProvider>
        ),
      },
    ],
  },
]);
const SimpleRouter = () => {
  return <RouterProvider router={router} />;
};

export default SimpleRouter;
