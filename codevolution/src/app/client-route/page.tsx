"use client";

import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";
const ClientComponent = () => {
  const theme = useTheme();
  const result = clientSideFunction();
  console.log("Client component executed successfully.");
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Component</h1>
      <p>
        This component is rendered on the client side.<span>{result}</span>
      </p>
    </div>
  );
};
export default ClientComponent;
