import { User } from "@prisma/client";

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName }) => {
    return `Subject: Happy birthday!\nHappy birthday, dear ${firstName}!\n`;
  });

  return messages.join("");
};
