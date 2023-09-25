import fs from "fs";
import type { City } from "../types/City";

const dataPath = __dirname + "/data/laposte_hexasmal.json";

export const loadCities = async (): Promise<City[]> => {
  const getCities = fs.readFileSync(dataPath, "utf8");
  const cities = await JSON.parse(getCities);

  if (!cities) {
    throw new Error("Cities not found");
  }

  return cities;
};

export const updateCitiesByZipCode = async (cities: City[]) => {
  await fs.writeFileSync(dataPath, JSON.stringify(cities));
};
