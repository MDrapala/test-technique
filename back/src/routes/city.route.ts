import Express from "express";
import { FindAll } from "../controllers/city.controller";
const CityRoute = (app: any) => {
  app.use(
    (
      _req: Express.Request,
      res: Express.Response,
      next: Express.NextFunction
    ) => {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    }
  );
  app.get("/city/all", FindAll);
};

export default CityRoute;
