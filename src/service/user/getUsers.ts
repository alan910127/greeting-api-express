import { PrismaClient } from "@prisma/client";

interface GetAllUsersInput {
  prisma: PrismaClient;
  take?: number;
  skip?: number;
}

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
