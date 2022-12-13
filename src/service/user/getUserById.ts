import { PrismaClient } from "@prisma/client";

interface GetAllUsersInput {
  prisma: PrismaClient;
  userId: string;
}

export const getUserById = async ({ prisma, userId }: GetAllUsersInput) => {
  const users = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return users;
};
