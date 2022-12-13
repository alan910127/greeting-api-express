import express from "express";
import swaggerUi from "swagger-ui-express";
import { apiRouter } from "./api/api";
import swaggerFile from "./docs/openapi.json";
import { logger } from "./utils/logger";

const app = express();
const { PORT = 8000 } = process.env;

app.use(express.json());

app.get("/", (_, res) => {
  // #swagger.summary = "Health Check"

  /* #swagger.responses[200] = {
    schema: { ping: "pong" }
  } */
  res.status(200).send({ ping: "pong" });
});

app.use("/api/v2", apiRouter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  logger.info(`🚀 Server ready at: http://localhost:${PORT}`);
});
