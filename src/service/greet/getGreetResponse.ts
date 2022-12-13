import { User } from "@prisma/client";

export const getGreetResponse = (users: User[]) => {
  return users;
};
