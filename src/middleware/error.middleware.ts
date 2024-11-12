import { UNAUTHORIZED } from "http-status";
import { JsonWebTokenError } from "jsonwebtoken";
import { MongooseError } from "mongoose";
import { Request, Response } from "express";
import {
  BadRequestError,
  ForbiddenRequestError,
  ResourceNotFoundError,
  UnauthorizedRequestError,
} from "../exceptions";

export const errHandler = (
  error: unknown,
  req: Request,
  res: Response,
): Response<unknown> => {
  let statuscode: number = res.statusCode == 200 ? 500 : res.statusCode;
  const message = { 1: "A server error occurred" };
  let type: string = "Server Error";
  if (error instanceof Error) {
    message[1] = error.message;
  }
  if (error instanceof JsonWebTokenError) {
    statuscode = UNAUTHORIZED;
    message[1] = error.message;
    type = "JWT Error or JWT Expired error";
  }
  if (error instanceof MongooseError) {
    message[1] = error.message;
    type = "Mongoose or MongoDB Error";
  }
  if (
    error instanceof UnauthorizedRequestError ||
    error instanceof BadRequestError ||
    error instanceof ResourceNotFoundError ||
    error instanceof ForbiddenRequestError
  ) {
    statuscode = error.statusCode;
    message[1] = error.message;
    type = error.name;
  }
  return res.status(statuscode).json({
    status: "fail",
    type,
    message,
    // stack: error?.stack,
  });
};
