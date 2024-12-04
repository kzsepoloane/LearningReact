import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { executeEveryMinute, executeInMinute } from "./Mock";

const mock = vi.fn(() => console.log("done"));
describe("delayed execution", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("should execute the function", () => {
    executeInMinute(mock);
    vi.runAllTimers();
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it("should not execute the function", () => {
    executeInMinute(mock);
    vi.advanceTimersByTime(2);
    expect(mock).not.toHaveBeenCalled();
  });
  it("should execute every minute", () => {
    executeEveryMinute(mock);
    vi.advanceTimersToNextTimer();
    expect(mock).toHaveBeenCalledTimes(1);
    vi.advanceTimersToNextTimer();
    expect(mock).toHaveBeenCalledTimes(2);
  });
});
