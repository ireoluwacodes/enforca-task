import Joi, { ObjectSchema } from "joi";

export const createJobSchema: ObjectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  company: Joi.string().required(),
  location: Joi.string().required(),
  salary: Joi.number().optional(),
  applicationDeadline: Joi.date().optional(),
  requirements: Joi.array().items(Joi.string()).optional(),
  responsibilities: Joi.array().items(Joi.string()).optional(),
});

export const updateJobSchema: ObjectSchema = Joi.object({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
  company: Joi.string().optional(),
  location: Joi.string().optional(),
  salary: Joi.number().optional(),
  applicationDeadline: Joi.date().optional(),
  requirements: Joi.array().items(Joi.string()).optional(),
  responsibilities: Joi.array().items(Joi.string()).optional(),
});

export const applyJobSchema: ObjectSchema = Joi.object({
  jobId: Joi.string().required(),
});
