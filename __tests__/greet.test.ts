import { Gender, User } from "@prisma/client";
import { getGreetResponse } from "../src/service/greet/getGreetResponse";

const getDate = (year: number, month: number, day: number) => {
  const date = new Date(year, month - 1, day, 8);
  return date;
};

const users: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    gender: Gender.MALE,
    dateOfBirth: getDate(2000, 1, 1),
    email: "johndoe@example.com",
  },
  {
    id: "1",
    firstName: "Jane",
    lastName: "Doe",
    gender: Gender.FEMALE,
    dateOfBirth: getDate(2000, 1, 1),
    email: "janedoe@example.com",
  },
];

describe("getGreetResponse", () => {
  it("should return simple message response", () => {
    const messages = getGreetResponse(users);

    expect(messages).toHaveLength(2);
    expect(messages).toEqual([
      {
        title: "Subject: Happy birthday!",
        content: "Happy birthday, dear John!",
      },
      {
        title: "Subject: Happy birthday!",
        content: "Happy birthday, dear Jane!",
      },
    ]);
  });

  it("should return empty array when input is empty", () => {
    const messages = getGreetResponse([]);
    expect(messages).toHaveLength(0);
  });
});