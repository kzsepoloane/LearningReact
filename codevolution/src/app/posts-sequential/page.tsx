import { Suspense } from "react";
import { Post } from "../_lib/Post";
import Author from "./author";
const PostsSequential = async () => {
  const response = await fetch(
    `${process.env.NEXT_JSON_PLACEHOLDER_BASE_URL}/posts`
  );
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter((post) => post.id % 10 == 1);
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-grey-800 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
            <Suspense fallback={<div>Loading author...</div>}>
              <Author id={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsSequential;
