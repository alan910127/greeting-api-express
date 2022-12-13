import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export const getUsersSchema = {
  query: z.object({
    take: z.coerce.number().nonnegative().optional(),
    skip: z.coerce.number().nonnegative().optional(),
  }),
};

type GetAllUsersInput = z.infer<typeof getUsersSchema.query> & {
  prisma: PrismaClient;
};

export const getUsers = async ({
  prisma,
  take = 100,
  skip = 0,
}: GetAllUsersInput) => {
  const users = await prisma.user.findMany({
    take,
    skip,
  });
  return users;
};
