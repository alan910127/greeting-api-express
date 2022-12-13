import { Gender } from "@prisma/client";
import { z } from "zod";
import { WithPrisma } from "../../types/WithPrisma";

export const updateUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    gender: z.nativeEnum(Gender).optional(),
    dateOfBirth: z.coerce.date().optional(),
    email: z.string().email().optional(),
  }),
};

type UpdateUserInput = WithPrisma<
  z.infer<typeof updateUserSchema.params> &
    z.infer<typeof updateUserSchema.body>
>;

export const updateUser = async ({
  prisma,
  userId,
  ...updateData
}: UpdateUserInput) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });
  return user;
};
