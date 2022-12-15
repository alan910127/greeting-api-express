import { Gender, User } from "@prisma/client";
import { getGreetResponse } from "../src/service/greet/getGreetResponse";

const getDate = (year: number, month: number, day: number) => {
  const date = new Date(year, month - 1, day, 8);
  return date;
};

const youngUsers: User[] = [
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

const elderUsers: User[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    gender: Gender.MALE,
    dateOfBirth: getDate(1972, 1, 1),
    email: "johndoe@example.com",
  },
  {
    id: "1",
    firstName: "Jane",
    lastName: "Doe",
    gender: Gender.FEMALE,
    dateOfBirth: getDate(1972, 1, 1),
    email: "janedoe@example.com",
  },
];

describe("getGreetResponse", () => {
  it("should not return a image url if the person is not over 49", () => {
    const messages = getGreetResponse({
      users: youngUsers,
      host: "http://localhost:8000",
    });

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

  it("should return a image url if the person is over 49", () => {
    const messages = getGreetResponse({
      users: elderUsers,
      host: "http://localhost:8000",
    });

    expect(messages).toHaveLength(2);
    expect(messages).toEqual([
      {
        title: "Subject: Happy birthday!",
        content: "Happy birthday, dear John!",
        imageUrl: "http://localhost:8000/api/v3/greeting/picture",
      },
      {
        title: "Subject: Happy birthday!",
        content: "Happy birthday, dear Jane!",
        imageUrl: "http://localhost:8000/api/v3/greeting/picture",
      },
    ]);
  });

  it("should return empty array when input is empty", () => {
    const messages = getGreetResponse({
      users: [],
      host: "http://localhost:8000",
    });
    expect(messages).toHaveLength(0);
  });
});
