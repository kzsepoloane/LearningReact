import styled from "@emotion/styled";
import {
  Button,
  Drawer,
  Grid2,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  PaperOwnProps,
  Stack,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const param = "From Param";
const query = new URLSearchParams({ msg: "From Query" });

const headerFooterStyle: PaperOwnProps = {
  sx: {
    textAlign: "center",
    height: 50,
  },
};

const mainStyle: TypographyProps = {
  sx: {
    textAlign: "center",
    padding: "8px 16px",
  },
};

const Item = styled(Paper)(() => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const GridLayout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  return (
    <Grid2 container spacing={2} sx={{ backgroundColor: "#F3F6F9" }}>
      <Grid2 size={{ lg: 12 }}>
        <Item {...headerFooterStyle}>Header</Item>
      </Grid2>
      <Grid2 size={{ lg: "auto" }}>
        <Stack spacing={1}>
          <Button onClick={toggleDrawer}>Open Nav</Button>
          <Item onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            <Drawer open={open} onClose={toggleDrawer}>
              <List>
                <NavLink
                  to="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/ChapterTwo"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Chapter Two" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/ChapterThree"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Chapter Three" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/ChapterFive"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Chapter Five" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/one"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="One" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/two"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Two" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/users"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Users" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to={`echo/${param}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Echo Param" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to={`echo?${query.toString()}`}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Echo Query" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/lazy"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Lazy" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/suspense"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Suspense" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/material-ui"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Material UI" />
                    </ListItemButton>
                  )}
                </NavLink>
                <NavLink
                  to="/batching"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItemButton selected={isActive}>
                      <ListItemText primary="Batching Update" />
                    </ListItemButton>
                  )}
                </NavLink>
              </List>
            </Drawer>
          </Item>
        </Stack>
      </Grid2>
      <Grid2 size={{ lg: "grow" }}>
        <Item>
          <Suspense fallback={<FadeLoader color="#36d7b7" />}>
            <Outlet />
          </Suspense>
        </Item>
      </Grid2>
      <Grid2 size={{ lg: 12 }}>
        <Item {...headerFooterStyle}>
          <Typography {...mainStyle}>Footer</Typography>
        </Item>
      </Grid2>
    </Grid2>
  );
};

export default GridLayout;
