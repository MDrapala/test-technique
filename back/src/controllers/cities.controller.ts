import Express from "express";
import { loadCities } from "../utils";
import { updateCitiesByZipCode } from "../utils/index";

export const FindAll = async (_: Express.Request, res: Express.Response) => {
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

  try {
    const filteredCities = cities.filter(
      (city) => city.fields.code_postal === zipCode
    );

    if (!filteredCities) {
      res.status(404).send({ message: "City not found" });
    }

    const response = await updateCitiesByZipCode(filteredCities, newZipCode);
    console.log({ response });
  } catch (error) {
    res.status(500).send({
      error,
      message: "Error update a city by recordID",
    });
  }
};

// export const DeleteZipCode = async (
//   req: Express.Request,
//   res: Express.Response
// ) => {
//   const { recordId } = req.params;
//   try {
//     const objWithIdIndex = listCity.findIndex(
//       ((city) => city.recordid === recordId
//     );

//     if (objWithIdIndex > -1) {
//       listCity.splice(objWithIdIndex, 1);
//     }

//     fs.writeFileSync(__dirname + dataPath, JSON.stringify(listCity));
//     res.status(200).send("city " + recordId + " deleted");
//   } catch (error) {
//     res.status(500).send({
//       error,
//       message: "Error delete a city by recordID",
//     });
//   }
// };
