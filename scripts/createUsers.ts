import { PrismaClient } from "@prisma/client";

const getDate = (year: number, month: number, day: number) => {
  const date = new Date(year, month - 1, day, 8);
  console.log(date);
  return date;
};

async function main() {
  const prisma = new PrismaClient();
  const result = await prisma.user.createMany({
    data: [
      {
        firstName: "Robert",
        lastName: "Yen",
        gender: "MALE",
        dateOfBirth: getDate(1985, 8, 8),
        email: "robert.yen@linecorp.com",
      },
      {
        firstName: "Cid",
        lastName: "Change",
        gender: "MALE",
        dateOfBirth: getDate(1990, 10, 10),
        email: "cid.change@linecorp.com",
      },
      {
        firstName: "Miki",
        lastName: "Lai",
        gender: "FEMALE",
        dateOfBirth: getDate(1993, 4, 5),
        email: "miki.lai@linecorp.com",
      },
      {
        firstName: "Sherry",
        lastName: "Chen",
        gender: "FEMALE",
        dateOfBirth: getDate(1993, 8, 8),
        email: "sherry.chen@linecorp.com",
      },
      {
        firstName: "Peter",
        lastName: "Wang",
        gender: "MALE",
        dateOfBirth: getDate(1950, 12, 22),
        email: "peter.wang@linecorp.com",
      },
    ],
  });
  console.log(result);
}

main();
