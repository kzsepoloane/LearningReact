import { en, Faker } from "@faker-js/faker";
import { Comment } from "./comment";
const generateComment = (): Comment => {
  const faker = new Faker({ locale: en });
  return {
    id: faker.string.uuid(),
    text: faker.lorem.paragraph(),
  };
};
const comments: Comment[] = Array.from({ length: 100 }, generateComment);

export { comments };
