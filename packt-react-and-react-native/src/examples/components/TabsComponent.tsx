import { Box, Tabs, Tab } from "@mui/material";
import { matchPath, NavLink, Outlet, useLocation } from "react-router-dom";

const TabsComponent = () => {
  const { pathname } = useLocation();

  const routes: string[] = [
    "material-ui/tabs/",
    "material-ui/tabs/ChapterTwo",
    "material-ui/tabs/ChapterThree/*",
    "material-ui/tabs/ChapterFive/*",
    "material-ui/tabs/one",
    "material-ui/tabs/two",
    "material-ui/tabs/users",
    "material-ui/tabs/echo/*",
    "material-ui/tabs/echo/?*",
    "material-ui/tabs/lazy",
    "material-ui/tabs/suspense",
    "material-ui/tabs/controls",
  ];

  const pathMatch = routes
    .map((i) => matchPath(i, pathname))
    .find((i) => i !== null);
  const currentTab = pathMatch?.pattern?.path;
  return (
    <Box>
      <Tabs value={currentTab}>
        <Tab
          label="Home"
          component={NavLink}
          to="/material-ui/tabs/"
          value="material-ui/tabs/"
        />
        <Tab
          label="Chapter Two"
          component={NavLink}
          to="/material-ui/tabs/ChapterTwo"
          value="material-ui/tabs/ChapterTwo"
        />
        <Tab
          label="Chapter Three"
          component={NavLink}
          to="/material-ui/tabs/ChapterThree"
          value="material-ui/tabs/ChapterThree/*"
        />
        <Tab
          label="Chapter Five"
          component={NavLink}
          to="/material-ui/tabs/ChapterFive"
          value="material-ui/tabs/ChapterFive/*"
        />
        <Tab
          label="One"
          component={NavLink}
          to="/material-ui/tabs/one"
          value="material-ui/tabs/one"
        />
        <Tab
          label="Two"
          component={NavLink}
          to="/material-ui/tabs/two"
          value="material-ui/tabs/two"
        />
        <Tab
          label="Users"
          component={NavLink}
          to="/material-ui/tabs/users"
          value="material-ui/tabs/users"
        />
        <Tab
          label="Echo Param"
          component={NavLink}
          to="/material-ui/tabs/echo/from-param"
          value="material-ui/tabs/echo/*"
        />
        <Tab
          label="Echo Query"
          component={NavLink}
          to="/material-ui/tabs/echo?msg=from-query"
          value="material-ui/tabs/echo/?*"
        />
        <Tab
          label="Lazy Loaded"
          component={NavLink}
          to="/material-ui/tabs/lazy"
          value="material-ui/tabs/lazy"
        />
        <Tab
          label="Suspense"
          component={NavLink}
          to="/material-ui/tabs/suspense"
          value="material-ui/tabs/suspense"
        />
        <Tab
          label="Controls"
          component={NavLink}
          to="/material-ui/tabs/controls"
          value="material-ui/tabs/controls"
        />
      </Tabs>
      <Outlet />
    </Box>
  );
};
export default TabsComponent;
