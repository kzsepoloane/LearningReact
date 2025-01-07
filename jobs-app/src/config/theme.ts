import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#1a365d" },
        primaryAccent: { value: "#ffffff" },
      },
    },
  },
  globalCss: {
    body: {
      height: "100%",
      bg: "gray.50",
    },
    height: {
      height: "100%",
      bg: "gray.50",
    },
    "#__next": {
      height: "100%",
      bg: "gray.50",
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
