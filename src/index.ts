import express from "express";
import { apiRouter } from "./api/api";
import { logger } from "./utils/logger";

const app = express();
const { PORT = 8000 } = process.env;

app.use(express.json());

app.get("/", (_, res) => {
  res.json({ ping: "pong" });
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  logger.info(`🚀 Server ready at: http://localhost:${PORT}`);
});
