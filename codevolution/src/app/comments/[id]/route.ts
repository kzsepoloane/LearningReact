import { Comment } from "@/app/comments/comment";
import { comments } from "@/app/comments/data";
const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment: Comment | undefined = comments.find((item: Comment) => {
    return item.id === id;
  });
  if (!comment) {
    return new Response("Comment not found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};

const PATCH = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const { text } = await request.json();
  const comment: Comment | undefined = comments.find((item: Comment) => {
    return item.id === id;
  });
  if (!comment) {
    return new Response("Comment not found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  comment.text = text;
  const index: number = comments.findIndex((item: Comment) => item.id === id);
  comments[index] = comment;

  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};

const DELETE = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const comment: Comment | undefined = comments.find((item: Comment) => {
    return item.id === id;
  });
  if (!comment) {
    return new Response("Comment not found", {
      status: 404,
      statusText: "Not Found",
    });
  }
  const index: number = comments.findIndex((item: Comment) => item.id === id);
  comments.splice(index, 1);

  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
};

export { GET, PATCH, DELETE };
