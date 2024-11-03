import { faker } from "@faker-js/faker";
export type User = {
  name: string;
  surname: string;
  age: number;
};
export type SortOrder = "asc" | "desc";
const Users: User[] = Array.from({ length: 10 }, () => {
  return {
    name: faker.person.firstName(),
    surname: faker.person.lastName(),
    age: faker.number.int({ min: 18, max: 99 }),
  };
});

const fetchUsers = (order: SortOrder = "asc") => {
  return Promise.resolve(order === "asc" ? Users : Users.reverse());
};
const fetchUser = (index: number) => {
  const user: User = Users[index];
  if (!user) {
    return Promise.reject("User not found");
  }
  return Promise.resolve(user);
};

export { fetchUsers, fetchUser };
