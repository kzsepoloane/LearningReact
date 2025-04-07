import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
//import { redirect } from "next/navigation";
const GET = async (request: NextRequest) => {
  //const requestHeaders = new Headers(request.headers);
  const requestHeaders = await headers();
  const name = request.cookies.get("name")?.value;
  const requestCookies = await cookies();
  const cookie = requestCookies.get("name")?.value;
  //redirect("/dashboard");
  requestCookies.set("name", "John Doe", { path: "/", httpOnly: true });
  return new Response(
    `Hello From ${name} == ${cookie} API folder with auth header ${requestHeaders.get(
      "Authorization"
    )}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "name=John Doe; Path=/; HttpOnly",
      },
      status: 200,
      statusText: "OK",
    }
  );
};

export { GET };
