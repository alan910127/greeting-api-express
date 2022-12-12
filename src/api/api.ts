import { Router } from "express";
import { greetRouter } from "./routes/greet";

export const apiRouter = Router();

apiRouter.use("/greet", greetRouter);
