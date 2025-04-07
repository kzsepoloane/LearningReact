const GET = async () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  return new Response(JSON.stringify({ time: currentTime }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};
//for caching
const dynamic = "force-static";
const revalidate = 60; //seconds
export { GET, dynamic, revalidate };
