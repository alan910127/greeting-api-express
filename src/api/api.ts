import { Router } from "express";
import { greetRouter } from "./routes/greetRouter";
import { userRouter } from "./routes/userRouter";

export const apiRouter = Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/greet", greetRouter);
