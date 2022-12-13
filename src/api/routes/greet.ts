import { Router } from "express";
import prisma from "../../lib/prisma";
import { getUsersByBirthday } from "../../service/greet/getUserByBirthday";
import { greetSchema } from "../../service/greet/greetSchema";

export const greetRouter = Router();

greetRouter.get("/", async (req, res) => {
  const result = greetSchema.safeParse(req);

  if (!result.success) {
    return res.status(400).send({ error: result.error });
  }

  const {
    query: { month, day },
  } = result.data;
  const users = await getUsersByBirthday({ prisma, month, day });
  res.status(200).send(users);
});
