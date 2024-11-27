import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Image from "next/image";
import GithubUser from "./api/GitHubUser";

const getServerSideProps = (async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
}) satisfies GetServerSideProps<{ user: GithubUser }>;

const About = ({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <h1>About</h1>
      <Image src={user.avatar_url} alt={user.login} width="100" height="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location || "Not specified"}</p>
      <p>Company: {user.company || "Not specified"}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
    </main>
  );
};

export default About;
export { getServerSideProps };
