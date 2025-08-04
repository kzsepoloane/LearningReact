import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import { MiddlewareFactory } from "./types";

// headers and cookies
export const simple: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = await next(request, _next);
    if (response instanceof NextResponse) {
      const cookie = request.cookies.get("name")?.value;
      if (!cookie) {
        response.cookies.set("name", "John Doe");
      }
      const header = request.headers.get("X-Powered-By");
      if (!header) {
        response.headers.set("X-Powered-By", "Codevolution");
      }
    }
    return response;
  };
};
