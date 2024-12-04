import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
const server = setupServer(
  http.get("https://api.github.com/users", () => {
    return HttpResponse.json({
      firstName: "Mikhail",
      lastName: "Sakhniuk",
    });
  })
);

describe("Mock fetch", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("should returns test data", async () => {
    const response = await fetch("https://api.github.com/users");
    expect(response.status).toBe(200);
    expect(response.statusText).toBe("OK");
    expect(await response.json()).toEqual({
      firstName: "Mikhail",
      lastName: "Sakhniuk",
    });
  });
});
