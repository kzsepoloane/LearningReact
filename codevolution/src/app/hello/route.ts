const GET = async () => {
  return new Response("Hello World!", { status: 200, statusText: "OK" });
};

export { GET };
