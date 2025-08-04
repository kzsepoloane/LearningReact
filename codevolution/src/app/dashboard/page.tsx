import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";

const BarChart = async () => {
  //DB version of the user
  const user = await currentUser();
  const authenticated = await auth();
  console.log(user, authenticated);
  return (
    <div>
      <h1>Bar Chart</h1>
    </div>
  );
};
//next js needs a default export to render page.tsx
export default BarChart;
