import UserInfo from "./components/UserInfo";
import { gql, useQuery } from "@apollo/client";

const GET_GITHUB_USER = gql`
  query GetGithubUser($username: String!) {
    user(login: $username) {
      login
      id
      avatarUrl
      bio
      name
      company
      location
    }
  }
`;

const GraphQL = () => {
  const { data, loading, error } = useQuery(GET_GITHUB_USER, {
    variables: { username: "kzsepoloane" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const user = data.user;

  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
};

export default GraphQL;
