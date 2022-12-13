import { z } from "zod";
import { WithPrisma } from "../../types/WithPrisma";

export const getUserByIdSchema = {
  params: z.object({
    userId: z.string(),
  }),
};

type GetAllUsersInput = WithPrisma<z.infer<typeof getUserByIdSchema.params>>;

export const getUserById = async ({ prisma, userId }: GetAllUsersInput) => {
  const users = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return users;
};
