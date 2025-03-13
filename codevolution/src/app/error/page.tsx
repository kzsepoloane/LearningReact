import React from "react";

const ErrorComponent = () => {
  throw new Error("This is a deliberate error for testing purposes.");
  return <div>This will not be rendered</div>;
};

export default ErrorComponent;
