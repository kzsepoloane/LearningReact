import { beforeAll, describe, expect, it, vi } from "vitest";
import { getSteps } from "./ios-health-kit";
describe("IOS Health Kit", () => {
  beforeAll(() => {
    vi.mock("./ios-health-kit", () => ({
      getSteps: vi.fn().mockImplementation(() => 2000),
    }));
  });
  it("should return steps", () => {
    expect(getSteps()).toBe(2000);
    expect(getSteps).toHaveBeenCalled();
  });
});
