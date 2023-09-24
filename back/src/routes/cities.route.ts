import Express from "express";
import {
  FindAll,
  FindByZipCode,
  UpdateZipCode,
  // DeleteZipCode,
} from "../controllers/cities.controller";

const CitiesRoute = (app: any) => {
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

  app.get("/cities/", FindAll);
  app.get("/cities/:zipCode", FindByZipCode);
  app.put("/cities/:zipCode", UpdateZipCode);
  // app.delete("/cities/:zipCode", DeleteZipCode);
};

export default CitiesRoute;
