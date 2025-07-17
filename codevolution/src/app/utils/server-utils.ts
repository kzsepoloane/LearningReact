import "server-only";
export const ServerSideFunction = async () => {
  // Simulate a server-side function that fetches data
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  console.log("Server-side function executed successfully.");
  return {
    message: "Data fetched successfully from the server!",
    timestamp: new Date().toISOString(),
  };
};
export const ServerSideError = async () => {
  // Simulate a server-side function that throws an error
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay
  throw new Error("This is a simulated server-side error.");
};

export const getUserPosts = async (userId: number) => {
  const response = await fetch(
    `${process.env.NEXT_JSON_PLACEHOLDER_BASE_URL}/posts/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user posts");
  }
  const posts = await response.json();
  return posts;
};

export const getUserAlbums = async (userId: number) => {
  const response = await fetch(
    `${process.env.NEXT_JSON_PLACEHOLDER_BASE_URL}/albums/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user albums");
  }
  const albums = await response.json();
  return albums;
};
