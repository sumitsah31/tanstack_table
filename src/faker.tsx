import { faker } from "@faker-js/faker";
import { test_case } from "./types";
faker.seed(124);
export function createRandomTestCase() {
  const priority = ["P0", "P1", "P2", "P3"];
  const status = [
    "draft",
    "Ready_for_review",
    "approved",
    "blocked",
    "rejected",
    "reopened",
  ];
  return {
    id: +faker.string.uuid(),
    title: faker.word.sample(),
    created_by: faker.internet.email(),
    updated_at: faker.date.past().toString(),
    priority: priority[Math.floor(Math.random() * priority.length)],
    status: status[Math.floor(Math.random() * status.length)],
    avatar: faker.image.avatar(),
  } as test_case;
}
export const CASE: test_case[] = faker.helpers
  .multiple(createRandomTestCase, {
    count: 200,
  })
  .map((data, index) => ({ ...data, id: index }));
