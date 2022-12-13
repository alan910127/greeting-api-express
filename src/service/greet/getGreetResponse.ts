import { User } from "@prisma/client";

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName, lastName }) => {
    return `Subject: Happy birthday!\nHappy birthday, dear ${lastName}, ${firstName}!\n`;
  });

  return messages.join("");
};
