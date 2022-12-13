import { PrismaClient } from "@prisma/client";
import { z } from "zod";

export const getUserByIdSchema = {
  params: z.object({
    userId: z.string(),
  }),
};

type GetAllUsersInput = z.infer<typeof getUserByIdSchema.params> & {
  prisma: PrismaClient;
};

export const getUserById = async ({ prisma, userId }: GetAllUsersInput) => {
  const users = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return users;
};
