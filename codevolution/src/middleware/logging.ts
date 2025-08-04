// middleware/withLogging.ts
import { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "./types";
export const logging: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    console.log("Log some data here", request.nextUrl.pathname);
    return next(request, _next);
  };
};
