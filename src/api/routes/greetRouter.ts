import { Router } from "express";
import { processRequest } from "zod-express-middleware";
import prisma from "../../lib/prisma";
import { getUsersByBirthday } from "../../service/user/getUserByBirthday";
import { getUsersByBirthdaySchema } from "../../service/user/schema/getUsersByBirthdaySchema";

export const greetRouter = Router();

greetRouter.get(
  "/",
  processRequest(getUsersByBirthdaySchema),
  async (req, res) => {
    const { month, day } = req.query;
    const users = await getUsersByBirthday({ prisma, month, day });
    res.status(200).send(users);
  }
);
