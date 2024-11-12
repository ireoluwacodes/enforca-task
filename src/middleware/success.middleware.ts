import { NextFunction, Response } from "express";
import { ProtectedRequest } from "../interfaces";
import { ForbiddenRequestError } from "../exceptions";

export const successHandler = (
  req: ProtectedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.data;
    if (!data) {
      throw new ForbiddenRequestError("No data from controller");
    }
    return res.status(data.statusCode).json({
      message: data.message,
      data: data.data,
      statusCode: data.statusCode,
    });
  } catch (error) {
    next(error);
  }
};
