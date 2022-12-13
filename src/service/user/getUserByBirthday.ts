import { PrismaClient, User } from "@prisma/client";

interface QueryUsersByBirthdayInput {
  prisma: PrismaClient;
  month: number;
  day: number;
}

export const getUsersByBirthday = async ({
  prisma,
  month,
  day,
}: QueryUsersByBirthdayInput) => {
  const users = await prisma.$queryRaw<User[]>`
  SELECT * 
  FROM "public"."User"
  WHERE EXTRACT(MONTH FROM "User"."dateOfBirth") = ${month}
    AND EXTRACT(DAY FROM "User"."dateOfBirth") = ${day}`;

  return users;
};
