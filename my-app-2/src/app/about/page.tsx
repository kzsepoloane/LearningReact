import Image from "next/image";
import GitHubUser from "./GitHubUser";
export const dynamic = "force-dynamic";
const About = async () => {
  const res = await fetch("https://api.github.com/users/kzsepoloane");
  const user: GitHubUser = await res.json();
  return (
    <main>
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
