import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
//import "./index.css";
import SimpleRouter from "./examples/SimpleRouter.tsx";

const theme = createTheme({
  typography: {
    fontSize: 11,
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          marginLeft: 15,
          marginRight: 15,
        },
      },
    },
  },
});

const root_element = document.getElementById("root");

createRoot(root_element!).render(
  <StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <SimpleRouter />
      </ThemeProvider>
    </>
  </StrictMode>
);
