import { useLoaderData, useParams } from "react-router-dom";
import UserData from "./User";
import { User } from "../models/User";

const UserContainer = () => {
  const params = useParams();
  const { user } = useLoaderData() as { user: User };
  return (
    <div>
      <h1>User Container {params.id}</h1>
      <UserData user={user} />
    </div>
  );
};

export default UserContainer;
