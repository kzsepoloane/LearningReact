import { useQuery } from "@tanstack/react-query";
import UserInfo from "./components/UserInfo";

const userFetcher = (username: string) =>
  fetch(`https://api.github.com/users/${username}`).then((response) =>
    response.json()
  );
const ReactQuery = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["githubUser"],
    queryFn: () => userFetcher("kzsepoloane"),
  });
  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  if (!data) return <p>No user found</p>;
  return <UserInfo user={data!} />;
};

export default ReactQuery;
