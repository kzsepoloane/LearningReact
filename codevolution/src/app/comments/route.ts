import { faker } from "@faker-js/faker";
import { Comment } from "./comment";
import { comments } from "./data";
import { NextRequest } from "next/server";
const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search") || "";
  const filteredComments = comments.filter((comment: Comment) => {
    return comment.text.toLowerCase().includes(search.toLowerCase());
  });
  return Response.json(filteredComments);
};

const POST = async (request: Request) => {
  const { text } = await request.json();
  const comment: Comment = {
    id: faker.string.uuid(),
    text: text,
  };
  comments.push(comment);
  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};

export { GET, POST };
