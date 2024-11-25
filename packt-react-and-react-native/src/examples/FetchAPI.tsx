import { useEffect, useState } from "react";
import UserInfo from "./components/UserInfo";
import GithubUser from "./Models/GitHubUser";

const FetchAPI = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/kzsepoloane")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Loading...</p>;

  if (!loading && user == null) return <p>No user found</p>;
  return <UserInfo user={user!} />;
};

export default FetchAPI;
