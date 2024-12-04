import { render, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ClassCheck from "./ClassCheck";

describe("ClassCheck", () => {
  it("should toggle class", () => {
    const { getByText, getByTestId } = render(<ClassCheck />);
    fireEvent.click(getByText("Click me"));
    expect(getByTestId("button")).toHaveClass("active");
    fireEvent.click(getByText("Click me"));
    expect(getByTestId("button")).not.toHaveClass("active");
  });
  it("should show and hide the hello element", async () => {
    const { getByText, getByTestId } = render(<ClassCheck />);
    expect(getByText("Hello")).not.toBeInTheDocument();
    fireEvent.click(getByText("Click me"));
    await waitFor(() => getByTestId("hello"));
    fireEvent.click(getByText("Click me"));
    await waitFor(() => expect(getByTestId("hello")).not.toBeInTheDocument());
  });
});
