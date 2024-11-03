import { Navigate, Outlet, RouteObject } from "react-router-dom";
import MyComponent from "../MyComponent";
import MyButton from "../MyButton";
import MyList from "../MyList";
import StateApp from "../StateManagement";
import TimerApp from "../TimerApp";
import Hooks from "../Hooks";
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
  path: "/ChapterThree",
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Navigate to="/ChapterThree/my-component" />,
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
      path: "passing-props",
      element: (
        <main>
          <MyComponent
            title="Welcome to My App"
            description="This is a description"
          />
          <MyButton disabled={appState.disabled} text={appState.text} />
          <MyButton disabled text="Another button" />
          <MyList items={appState.items} />
        </main>
      ),
    },
    {
      path: "state-management",
      element: <StateApp name={appState.name} age={appState.age} />,
    },
    {
      path: "timer",
      element: <TimerApp />,
    },
    {
      path: "hooks",
      element: <Hooks />,
    },
  ],
};

export default routes;
