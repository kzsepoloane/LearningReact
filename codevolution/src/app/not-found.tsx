"use client";
import React from "react";
import { usePathname } from "next/navigation";
const NotFound = () => {
  const pathname = usePathname();
  return (
    <div>
      <h1>404</h1>
      <p>Could not find requested resource{pathname}</p>
    </div>
  );
};

export default NotFound;
