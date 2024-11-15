import Joi, { ObjectSchema } from "joi";

export const createTaskSchema: ObjectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  users: Joi.array().items(Joi.string().required()).required(),
});

export const updateTaskSchema: ObjectSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  startDate: Joi.date().optional(),
  endDate: Joi.date().optional(),
  completed: Joi.boolean().optional(),
  users: Joi.array().items(Joi.string().optional()).optional(),
});
