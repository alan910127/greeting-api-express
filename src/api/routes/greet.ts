import { Router } from "express";

export const greetRouter = Router();

greetRouter.get("/", async (req, res) => {
  res.send("Hi");
});
