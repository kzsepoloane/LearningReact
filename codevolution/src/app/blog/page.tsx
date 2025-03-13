import React from "react";

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <h1>This is a blog</h1>
    </div>
  );
}
