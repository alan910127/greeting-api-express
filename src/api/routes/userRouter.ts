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
  const { take, skip } = req.query;
  const users = await getUsers({ prisma, take, skip });
  return res.status(200).send(users);
});

userRouter.get(
  "/:userId",
  processRequest(getUserByIdSchema),
  async (req, res) => {
    const { userId } = req.params;
    const user = await getUserById({ prisma, userId });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.status(200).send(user);
  }
);

userRouter.post("/", processRequest(createUserSchema), async (req, res) => {
  const userData = req.body;
  const user = await createUser({ prisma, ...userData });
  return res.status(201).send(user);
});

userRouter.patch(
  "/:userId",
  processRequest(updateUserSchema),
  async (req, res) => {
    const { userId } = req.params;
    const existedUser = await getUserById({ prisma, userId });
    if (!existedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    const updateData = req.body;
    const updatedUser = await updateUser({ prisma, userId, ...updateData });
    return res.status(200).send(updatedUser);
  }
);

userRouter.delete(
  "/:userId",
  processRequest(deleteUserSchema),
  async (req, res) => {
    const { userId } = req.params;
    const existedUser = await getUserById({ prisma, userId });
    if (!existedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    await deleteUser({ prisma, userId });
    return res.status(204).send();
  }
);
