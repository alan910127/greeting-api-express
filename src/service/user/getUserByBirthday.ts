import { User } from "@prisma/client";
import { z } from "zod";
import { WithPrisma } from "../../types/WithPrisma";

export const getUsersByBirthdaySchema = {
  query: z
    .object({
      month: z.coerce.number(),
      day: z.coerce.number(),
    })
    .refine(({ month, day }) => isDateValid(month, day), {
      message: "Incorrect date provided",
      path: ["day"],
    }),
};

const isDateValid = (month: number, day: number) => {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return day <= 31;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return day <= 30;
  }
  if (month === 2) {
    return day <= 29;
  }
  return false;
};

type QueryUsersByBirthdayInput = WithPrisma<
  z.infer<typeof getUsersByBirthdaySchema.query>
>;

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
