import Express from "express";
import fs from "fs";

const dataPath = "/data/laposte_hexasmal.json";

const loadCityList = () => {
  const getCityList = fs.readFileSync(__dirname + dataPath, "utf8");
  const cityList = JSON.parse(getCityList);
  return cityList;
};

const listCity = loadCityList();

export const FindAll = async (_: Express.Request, res: Express.Response) => {
  try {
    res.status(200).send(listCity);
  } catch (error) {
    res.status(500).send({
      error,
      message: "Error retrieving city list",
    });
  }
};

export const FindByZipCode = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { zipCode } = req.params;
  try {
    const result = listCity.find((city: any) => {
      if (city.fields.code_postal === zipCode) {
        res.status(200).send(city);
      }
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      error,
      message: "Error retrieving city by zip code",
    });
  }
};
