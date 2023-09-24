import fs from "fs";
import type { City } from "../types/City";

const dataPath = "/data/laposte_hexasmal.json";

export const loadCities = async (): Promise<City[]> => {
  const getCities = fs.readFileSync(__dirname + dataPath, "utf8");
  const cities = await JSON.parse(getCities);

  if (!cities) {
    throw new Error("Cities not found");
  }

  return cities;
};

export const updateCitiesByZipCode = (cities: City[]) => {
  fs.writeFileSync(__dirname + dataPath, JSON.stringify(cities));
};
