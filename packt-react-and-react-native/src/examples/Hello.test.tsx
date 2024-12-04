import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hello from "./Hello";

describe("Hello", () => {
  it("should be in document ", () => {
    render(<Hello />);
    expect(screen.getByText(/Hello,.*JSX/)).toBeInTheDocument();
  });
});
