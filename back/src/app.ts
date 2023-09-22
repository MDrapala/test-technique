import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as middlewares from "./middlewares";
import cityRoute from "./routes/city.route";
import defaultRoute from "./routes/default.route";
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

defaultRoute(app);
cityRoute(app);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
