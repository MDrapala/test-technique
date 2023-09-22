import Express from "express";
import fs from "fs";

const dataPath = "/data/laposte_hexasmal.json";

export const FindAll = async (_: Express.Request, res: Express.Response) => {
  try {
    const getCityList = fs.readFileSync(__dirname + dataPath, "utf8");
    const cityList = JSON.parse(getCityList);

    res.status(200).send(cityList);
  } catch (error) {
    res.status(500).send({
      error,
      message: "Error retrieving city list",
    });
  }
};
