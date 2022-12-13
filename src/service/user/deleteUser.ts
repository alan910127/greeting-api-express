import { z } from "zod";
import { WithPrisma } from "../../types/WithPrisma";

export const deleteUserSchema = {
  params: z.object({
    userId: z.string(),
  }),
};

type DeleteUserInput = WithPrisma<z.infer<typeof deleteUserSchema.params>>;

export const deleteUser = async ({ prisma, userId }: DeleteUserInput) => {
  const user = await prisma.user.delete({ where: { id: userId } });
  return user;
};
