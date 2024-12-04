import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";
import { describe, expect, it } from "vitest";

describe("useCounter", () => {
  it("should initialize with a count of 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("should increment the count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("should decrement the count", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});
