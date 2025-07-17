import { User } from "@/app/_lib/User";
import React from "react";

const UsersServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `${process.env.NEXT_JSON_PLACEHOLDER_BASE_URL}/users`
  );
  const data: User[] = await response.json();
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.username}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersServer;
