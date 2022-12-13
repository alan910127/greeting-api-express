import { Gender } from "@prisma/client";
import { z } from "zod";
import { WithPrisma } from "../../types/WithPrisma";

export const createUserSchema = {
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    gender: z.nativeEnum(Gender),
    dateOfBirth: z.coerce.date(),
    email: z.string().email(),
  }),
};

type GetAllUsersInput = WithPrisma<z.infer<typeof createUserSchema.body>>;

export const createUser = async ({ prisma, ...userData }: GetAllUsersInput) => {
  const user = await prisma.user.create({
    data: userData,
  });
  return user;
};
