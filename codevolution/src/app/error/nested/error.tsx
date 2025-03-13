"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function ErrorFallback({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div role="alert">
      <p>Something went wrong in nested route:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={() => reload()}>Try again</button>
    </div>
  );
}
