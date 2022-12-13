import { z } from "zod";
import { WithPrisma } from "../../types/WithPrisma";

export const getUsersSchema = {
  query: z.object({
    take: z.coerce.number().nonnegative().optional(),
    skip: z.coerce.number().nonnegative().optional(),
  }),
};

type GetAllUsersInput = WithPrisma<z.infer<typeof getUsersSchema.query>>;

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
