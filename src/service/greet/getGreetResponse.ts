import { User } from "@prisma/client";
import { XMLBuilder } from "fast-xml-parser";

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName }) => {
    return {
      title: "Subject: Happy birthday!",
      content: `Happy birthday, dear ${firstName}!`,
    };
  });

  const builder = new XMLBuilder({});
  const xmlMessages = builder.build({ root: { Greet: messages } });

  return xmlMessages;
};
