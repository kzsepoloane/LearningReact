import { InferGetStaticPropsType } from "next";
import Link from "next/link";

const getStaticProps = async () => {
  const posts: string[] = ["1", "2", "3"];
  return {
    props: { posts },
  };
};

const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post}>
            <Link href={`/posts/${post}`}>Post {post}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Post;
export { getStaticProps };
