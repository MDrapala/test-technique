import { NextFunction, Request, Response } from "express";
import type ErrorResponse from "./types/ErrorResponse";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`- Not Found - ${req.originalUrl}`);
  next(error);
};

export const errorHandler = (
  err: Error,
  _: Request,
  res: Response<ErrorResponse>
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "prod" : err.stack,
  });
};
