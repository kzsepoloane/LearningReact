import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
//basic redirect
//const middleware = (request: NextRequest) => NextResponse.redirect(new URL("/", request.url));
// const config = {
//   matcher: ["/error:path*"], // Match all paths under /error
// };

//conditional redirect
// const middleware = (request: NextRequest) => {
//   const { pathname } = request.nextUrl;
//   if (pathname.startsWith("/error")) {
//     return NextResponse.redirect(new URL("/hello", request.nextUrl));
//   }
//   return NextResponse.next();
// };

// rewrite
// const middleware = (request: NextRequest) => {
//   const { pathname } = request.nextUrl;
//   if (pathname.startsWith("/error")) {
//     return NextResponse.rewrite(new URL("/hello", request.nextUrl));
//   }
//   return NextResponse.next();
// };

// headers and cookies
const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  const cookie = request.cookies.get("name")?.value;
  if (!cookie) {
    response.cookies.set("name", "John Doe");
  }
  const header = request.headers.get("X-Powered-By");
  if (!header) {
    response.headers.set("X-Powered-By", "Codevolution");
  }
  return response;
};
//export { middleware, config };
export { middleware };
