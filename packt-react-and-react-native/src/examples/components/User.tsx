import { User } from "../models/User";
type UserDataProps = {
  user: User;
};

const UserData = ({ user }: UserDataProps) => {
  return (
    <section>
      <p>Name: {user.name}</p>
      <p>Surname: {user.surname}</p>
      <p>Age: {user.age}</p>
    </section>
  );
};
export default UserData;
