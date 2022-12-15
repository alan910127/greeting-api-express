import { Gender, PrismaClient } from "@prisma/client";
import { getUsersByBirthday } from "../src/service/user/getUserByBirthday";
import { getUsers } from "../src/service/user/getUsers";

let prisma: PrismaClient;

const getDate = (year: number, month: number, day: number) => {
  const date = new Date(year, month - 1, day, 8);
  return date;
};

beforeAll(async () => {
  prisma = new PrismaClient();

  await prisma.user.createMany({
    data: [
      {
        firstName: "Robert",
        lastName: "Yen",
        gender: Gender.MALE,
        dateOfBirth: getDate(1985, 8, 8),
        email: "robert.yen@linecorp.com",
      },
      {
        firstName: "Cid",
        lastName: "Change",
        gender: Gender.MALE,
        dateOfBirth: getDate(1990, 10, 10),
        email: "cid.change@linecorp.com",
      },
      {
        firstName: "Miki",
        lastName: "Lai",
        gender: Gender.FEMALE,
        dateOfBirth: getDate(1993, 4, 5),
        email: "miki.lai@linecorp.com",
      },
      {
        firstName: "Sherry",
        lastName: "Chen",
        gender: Gender.FEMALE,
        dateOfBirth: getDate(1993, 8, 8),
        email: "sherry.chen@linecorp.com",
      },
      {
        firstName: "Peter",
        lastName: "Wang",
        gender: Gender.MALE,
        dateOfBirth: getDate(1950, 12, 22),
        email: "peter.wang@linecorp.com",
      },
    ],
  });

  console.log(`✨ 5 users successfully created!`);
});

afterAll(async () => {
  await prisma.user.deleteMany();
  await prisma.$disconnect();
});

describe("getUsersByBirthday", () => {
  it("should get all users with birthday in input", async () => {
    const allUsers = await getUsers({ prisma });
    const filteredUsers = await getUsersByBirthday({
      prisma,
      month: 8,
      day: 8,
    });

    expect(filteredUsers).toHaveLength(2);
    expect(filteredUsers).toEqual(
      allUsers.filter((user) => ["Robert", "Sherry"].includes(user.firstName))
    );
  });

  it("should get no user when input is invalid", async () => {
    const filteredUsers = await getUsersByBirthday({
      prisma,
      month: 2,
      day: 30,
    });

    expect(filteredUsers).toHaveLength(0);
  });
});
