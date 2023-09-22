import Express from "express";

export const HelloPoste = async (_: Express.Request, res: Express.Response) => {
  res.status(200).send({
    message: "La Poste ✉️ !",
  });
};
