import { z } from "zod";

export const getUsersSchema = {
  query: z.object({
    take: z.coerce.number().nonnegative().default(100),
    skip: z.coerce.number().nonnegative().default(0),
  }),
};
