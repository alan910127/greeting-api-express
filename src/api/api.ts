import { Router } from "express";
import { greetRouter } from "./routes/greetRouter";

export const apiRouter = Router();

apiRouter.use("/greet", greetRouter);
