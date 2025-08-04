import { simple } from "./middleware/simple";
import { logging } from "./middleware/logging";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
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

const isProtectedRoute = createRouteMatcher([
  "/dashboard/:path*",
  "/api/:path*",
  "/user-profile/:path*",
  "/users",
]);

//const isPublicRoute = createRouteMatcher(["/", "/products/:path*", "/hello"]);
const clerkCallBack = async (auth, req) => {
  //can also be inverted to !isPublicRoute
  if (isProtectedRoute(req)) {
    return await auth.protect();
  }
  // can also add extra logic before choosing to redirect
  // const { userID, redirectToSignIn } = await auth;
  // if (!userID) {
  //   return await redirectToSignIn({ returnToUrl: req.url });
  // }
};
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

export default simple(logging(clerkMiddleware(clerkCallBack)));
//export { middleware, config };
