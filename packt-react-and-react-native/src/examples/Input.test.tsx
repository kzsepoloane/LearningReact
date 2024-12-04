import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("should handle change event", () => {
    render(<Input />);
    const input = screen.getByTestId<HTMLInputElement>("userName");
    fireEvent.change(input, { target: { value: "Mikhail" } });
    expect(input.value).toBe("Mikhail");
  });
});
