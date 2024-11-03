import { Link } from "react-router-dom";
import { User } from "../Models/User";

type UsersProps = {
  users: User[];
};

function Users({ users }: UsersProps) {
  return (
    <ul>
      {users.map((user, id) => (
        <li key={id}>
          <Link to={`/users/${id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Users;
