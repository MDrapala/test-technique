import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as middlewares from "./middlewares";

import cityRoute from "./routes/city.route";

import MessageResponse from "./interfaces/MessageResponse";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (_, res) => {
  res.json({
    message: "Hello La Poste!",
  });
});

cityRoute(app);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
