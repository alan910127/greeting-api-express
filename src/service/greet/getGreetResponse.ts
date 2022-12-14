import { Gender, User } from "@prisma/client";

const promotion = {
  [Gender.MALE]: {
    discount: 20,
    items: ["White Wine", "iPhone X"],
  },
  [Gender.FEMALE]: {
    discount: 50,
    items: ["Cosmetic", "LV Handbags"],
  },
};

const getPromotionMessage = ({
  discount,
  items,
}: {
  discount: number;
  items: string[];
}) => {
  return [
    `We offer special discount ${discount}% off for the following items:`,
    items.join(", "),
  ];
};

export const getGreetResponse = (users: User[]) => {
  const messages = users.map(({ firstName, gender }) => {
    return {
      title: "Subject: Happy birthday!",
      content: [
        `Happy birthday, dear ${firstName}!`,
        ...getPromotionMessage(promotion[gender]),
      ],
    };
  });
  return messages.join("");
};
