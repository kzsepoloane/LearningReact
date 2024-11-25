import { Outlet, RouteObject } from "react-router-dom";
import Hello from "../Hello";
import BuiltInTags from "../BuiltInTags";
import Layout from "../Layout";
import MyComponent from "../MyComponent";
import MySection from "../MySection";
import MyButton from "../MyButton";
import Expressions from "../Expressions";
import Events from "../Events";
import ObjectArrayMappings from "../ObjectArrayMappings";
const appState: {
  text: string;
  disabled: boolean;
  items: string[];
  name: string;
  age: number;
} = {
  text: "My Button",
  disabled: false,
  items: ["First", "Second", "Third"],
  name: "Karabo",
  age: 33,
};
const routes: RouteObject = {
  path: "ChapterTwo",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Hello />,
    },
    {
      path: "built-in-tags",
      element: <BuiltInTags />,
    },
    {
      path: "ui-structure",
      element: <Layout />,
    },
    {
      path: "my-component",
      element: (
        <MyComponent
          title="Welcome to My App"
          description="This is a description"
        />
      ),
    },
    {
      path: "nested-elements",
      element: (
        <MySection>
          <MyButton disabled={appState.disabled} text={appState.text} />
        </MySection>
      ),
    },
    {
      path: "expressions",
      element: <Expressions />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "collection-mappings",
      element: <ObjectArrayMappings />,
    },
  ],
};

export default routes;
