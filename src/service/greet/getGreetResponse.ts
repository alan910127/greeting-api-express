import { User } from "@prisma/client";

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName, lastName }) => {
    return {
      title: "Subject: Happy birthday!",
      content: `Happy birthday, dear ${lastName}, ${firstName}!`,
    };
  });

  return messages;
};
