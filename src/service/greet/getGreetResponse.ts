import { User } from "@prisma/client";

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName }) => {
    return {
      title: "Subject: Happy birthday!",
      content: `Happy birthday, dear ${firstName}!`,
    };
  });

  return messages;
};
