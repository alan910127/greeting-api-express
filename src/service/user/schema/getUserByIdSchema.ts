import { z } from "zod";

export const getUserByIdSchema = {
  params: z.object({
    userId: z.string(),
  }),
};
