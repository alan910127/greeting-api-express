import { z } from "zod";

export const getUsersByBirthdaySchema = {
  query: z
    .object({
      month: z.coerce.number(),
      day: z.coerce.number(),
    })
    .refine(({ month, day }) => isDateCorrect(month, day), {
      message: "Incorrect date provided",
      path: ["day"],
    }),
};

const isDateCorrect = (month: number, day: number) => {
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
