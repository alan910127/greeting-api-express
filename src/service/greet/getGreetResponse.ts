import { User } from "@prisma/client";

const isOver49 = (dateOfBirth: Date) => {
  const now = new Date(Date.now());
  return now.getUTCFullYear() - dateOfBirth.getUTCFullYear() > 49;
};

interface Message {
  title: string;
  content: string;
  imageUrl?: string;
}

export const getGreetResponse = ({
  users,
  host,
}: {
  users: User[];
  host?: string;
}) => {
  const messages = users.map(({ firstName, dateOfBirth }) => {
    const message: Message = {
      title: "Subject: Happy birthday!",
      content: `Happy birthday, dear ${firstName}!`,
    };
    if (isOver49(dateOfBirth)) {
      message.imageUrl = `${host}/api/v3/greeting/picture`;
    }
    return message;
  });

  return messages;
};
