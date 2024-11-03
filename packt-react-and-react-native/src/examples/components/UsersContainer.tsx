import { useState, useEffect } from "react";
import { SortOrder, User, fetchUsers } from "../Models/User";
import Users from "./Users";
import { useSearchParams } from "react-router-dom";

function UsersContainer() {
  const [users, setUsers] = useState<User[]>([]);
  const [search] = useSearchParams();
  useEffect(() => {
    const order = search.get("order") as SortOrder;
    fetchUsers(order).then((users) => {
      setUsers(users);
    });
  }, [search]);

  return <Users users={users} />;
}

export default UsersContainer;
