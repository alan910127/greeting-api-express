import { Router } from "express";
import prisma from "../../lib/prisma";
import { getUsersByBirthday } from "../../service/greet/getUserByBirthday";
import { greetSchema } from "../../service/greet/greetSchema";
import { zParse } from "../../utils/zParse";

export const greetRouter = Router();

greetRouter.get("/", async (req, res) => {
  const {
    query: { month, day },
  } = await zParse(greetSchema, req);
  const users = await getUsersByBirthday({ prisma, month, day });
  res.status(200).send(users);
});
