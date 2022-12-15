import { User } from "@prisma/client";
import { toXml } from "../../utils/toXml";

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName }) => {
    return {
      title: "Subject: Happy birthday!",
      content: `Happy birthday, dear ${firstName}!`,
    };
  });

  return toXml({ root: { Greet: messages } });
};
