import { ReactNode } from "react";
import theme from "@/config/theme";

import { Provider } from "@chakra-ui/ui/provider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};
