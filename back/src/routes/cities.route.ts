import Express from "express";
import {
  FindCities,
  FindCitiesByPaginate,
  FindByZipCode,
  FindZipCodeByOrder,
  UpdateZipCode,
  DeleteZipCode,
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

  app.get("/cities/", FindCities);
  app.get("/cities/pages=:numberPage&limit=:limitResult", FindCitiesByPaginate);
  app.get("/cities/:zipCode", FindByZipCode);
  app.get("/cities/:zipCode/:typeOrder", FindZipCodeByOrder);
  app.put("/cities/:zipCode", UpdateZipCode);
  app.delete("/cities/:zipCode", DeleteZipCode);
};

export default CitiesRoute;
