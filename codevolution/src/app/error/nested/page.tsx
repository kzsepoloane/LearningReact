import React from "react";

const NestedErrorComponent = () => {
  throw new Error("This is a deliberate error for testing purposes.");
  return <div>This will not be rendered</div>;
};

export default NestedErrorComponent;
export const dynamic = "force-dynamic";
