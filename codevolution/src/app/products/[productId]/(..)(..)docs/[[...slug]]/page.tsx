import React from "react";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Intercepted Docs Landing Page</h1>
      <p>Slug: {slug?.join("/")}</p>
    </div>
  );
}
