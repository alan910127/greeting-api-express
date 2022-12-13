import { Router } from "express";
import { processRequest } from "zod-express-middleware";
import prisma from "../../lib/prisma";
import {
  getUsersByBirthday,
  getUsersByBirthdaySchema,
} from "../../service/user/getUserByBirthday";

export const greetRouter = Router();

greetRouter.get(
  "/",
  processRequest(getUsersByBirthdaySchema),
  async (req, res) => {
    // #swagger.tags = ["Greet"]
    // #swagger.summary = "Greet Users"

    /* 
    #swagger.parameters["month"] = {
      in: "query",
      required: true,
      type: "integer"
    }
    #swagger.parameters["day"] = {
      in: "query",
      required: true,
      type: "integer"
    } 
    */
    const { month, day } = req.query;
    const users = await getUsersByBirthday({ prisma, month, day });

    /* #swagger.responses[200] = {
      schema: [{ $ref: "#/definitions/User" }],
    } */
    res.status(200).send(users);
  }
);
