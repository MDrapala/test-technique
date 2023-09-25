import Express from "express";
import { loadCities, updateCitiesByZipCode } from "../utils";

export const FindCities = async (_: Express.Request, res: Express.Response) => {
  const cities = await loadCities();
  try {
    if (!cities) {
      res.status(404).send({ message: "City not found" });
    }
    res.status(200).send({ cities: cities, number_of_pages: cities.length });
  } catch (error) {
    res.status(500).send({
      error,
      message: "City recovery error",
    });
  }
};

export const FindByZipCode = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { zipCode } = req.params;

  if (!zipCode) {
    res.status(400).send({ message: "Zip code is missing" });
  }

  const cities = await loadCities();

  const citiesList = cities.filter(
    (city) => city.fields.code_postal === zipCode
  );

  if (!citiesList) {
    res.status(404).send({ message: "City not found" });
  }

  res
    .status(200)
    .send({ cities: citiesList, number_of_pages: citiesList.length });
};

export const UpdateZipCode = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { zipCode } = req.params;
  const { newZipCode } = req.body;

  if (!zipCode) {
    res.status(400).send({ message: "Zip code is missing" });
  }
  if (!newZipCode) {
    res.status(400).send({ message: "New zip code fied is missing" });
  }

  const cities = await loadCities();

  const filteredCities = cities.filter(
    (city) => city.fields.code_postal === zipCode
  );

  if (!filteredCities) {
    res.status(404).send({ message: "City not found" });
  }

  filteredCities.forEach((city) => {
    city.fields.code_postal = newZipCode;
  });

  await updateCitiesByZipCode(cities);

  res.status(200).send({
    updated_cities: filteredCities,
    number_of_pages: filteredCities.length,
  });
};

export const DeleteZipCode = async (
  req: Express.Request,
  res: Express.Response
) => {
  const { zipCode } = req.params;

  if (!zipCode) {
    res.status(400).send({ message: "Zip code is missing" });
  }

  try {
    const cities = await loadCities();

    const filteredCities = cities.filter(
      (city) => city.fields.code_postal === zipCode
    );

    if (!filteredCities) {
      res.status(404).send({ message: "City not found" });
    }

    for (const filteredCity of filteredCities) {
      const index = cities.findIndex(
        (city) => city.recordid === filteredCity.recordid
      );
      if (index !== -1) {
        cities.splice(index, 1);
      }
    }

    await updateCitiesByZipCode(cities);

    res.status(200).send({
      removes_cities: filteredCities,
      number_of_pages: filteredCities.length,
    });
  } catch (error) {
    res.status(500).send({
      error,
      message: "Error delete a city by recordID",
    });
  }
};
