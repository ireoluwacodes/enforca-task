import { NextFunction, Request, Response } from "express";
import { BAD_REQUEST } from "http-status";
import { ObjectSchema } from "joi";

export const validator =
  (schema: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      await schema.validateAsync(body);
      next();
    } catch (error) {
      res.status(BAD_REQUEST);
      next(error);
    }
  };
