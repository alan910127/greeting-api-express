import { Router } from "express";
import { processRequest } from "zod-express-middleware";
import prisma from "../../lib/prisma";
import { createUser, createUserSchema } from "../../service/user/createUser";
import { deleteUser, deleteUserSchema } from "../../service/user/deleteUser";
import { getUserById, getUserByIdSchema } from "../../service/user/getUserById";
import { getUsers, getUsersSchema } from "../../service/user/getUsers";
import { updateUser, updateUserSchema } from "../../service/user/updateUser";

export const userRouter = Router();

userRouter.get("/", processRequest(getUsersSchema), async (req, res) => {
  // #swagger.tags = ["Users"]
  // #swagger.summary = "Get All Users"

  /* 
  #swagger.parameters["take"] = {
    in: "query",
    required: false,
    type: "integer"
  }
  #swagger.parameters["skip"] = {
    in: "query",
    required: false,
    type: "integer"
  } 
  */
  const { take, skip } = req.query;
  const users = await getUsers({ prisma, take, skip });

  /* #swagger.responses[200] = {
    schema: [{ $ref: "#/definitions/User" }],
  } */
  return res.status(200).send(users);
});

userRouter.get(
  "/:userId",
  processRequest(getUserByIdSchema),
  async (req, res) => {
    // #swagger.tags = ["Users"]
    // #swagger.summary = "Get User by Id"

    /* #swagger.parameters["userId"] = {
      in: "path",
      required: true,
      type: "string"
    } */
    const { userId } = req.params;
    const user = await getUserById({ prisma, userId });
    if (!user) {
      /* #swagger.responses[404] = {
        schema: { $ref: "#/definitions/UserNotFound" }
      } */
      return res.status(404).send({ message: "User not found" });
    }

    /* #swagger.responses[200] = {
      schema: { $ref: "#/definitions/User" }
    } */
    return res.status(200).send(user);
  }
);

userRouter.post("/", processRequest(createUserSchema), async (req, res) => {
  // #swagger.tags = ["Users"]
  // #swagger.summary = "Create a New User"

  /* #swagger.parameters["userData"] = {
    in: "body",
    required: true,
    schema: { $ref: "#/definitions/UserCreate" }
  } */
  const userData = req.body;
  const user = await createUser({ prisma, ...userData });

  /* #swagger.responses[201] = {
    schema: { $ref: "#/definitions/User" }
  } */
  return res.status(201).send(user);
});

userRouter.patch(
  "/:userId",
  processRequest(updateUserSchema),
  async (req, res) => {
    // #swagger.tags = ["Users"]
    // #swagger.summary = "Upadte User"

    /* #swagger.parameters["userId"] = {
      in: "path",
      required: true,
      type: "string"
    } */
    const { userId } = req.params;
    const existedUser = await getUserById({ prisma, userId });
    if (!existedUser) {
      /* #swagger.responses[404] = {
        schema: { $ref: "#/definitions/UserNotFound" }
      } */
      return res.status(404).send({ message: "User not found" });
    }

    /* #swagger.parameters["userData"] = {
      in: "body",
      required: true,
      schema: { $ref: "#/definitions/UserUpdate" }
    } */
    const updateData = req.body;
    const updatedUser = await updateUser({ prisma, userId, ...updateData });

    /* #swagger.responses[201] = {
      schema: { $ref: "#/definitions/User" }
    } */
    return res.status(200).send(updatedUser);
  }
);

userRouter.delete(
  "/:userId",
  processRequest(deleteUserSchema),
  async (req, res) => {
    // #swagger.tags = ["Users"]
    // #swagger.summary = "Delete a User"

    /* #swagger.parameters["userId"] = {
      in: "path",
      required: true,
      type: "string"
    } */
    const { userId } = req.params;
    const existedUser = await getUserById({ prisma, userId });
    if (!existedUser) {
      /* #swagger.responses[404] = {
        schema: { $ref: "#/definitions/UserNotFound" }
      } */
      return res.status(404).send({ message: "User not found" });
    }
    await deleteUser({ prisma, userId });
    return res.status(204).send();
  }
);
