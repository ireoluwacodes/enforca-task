import Joi, { ObjectSchema } from "joi";

export const createUserSchema: ObjectSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const loginSchema: ObjectSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const forgotSchema: ObjectSchema = Joi.object({
  email: Joi.string().required(),
});

export const otpSchema: ObjectSchema = Joi.object({
  otp: Joi.string().min(6).max(6).required(),
  email: Joi.string().required(),
});

export const passwordSchema: ObjectSchema = Joi.object({
  password: Joi.string().required(),
});

export const updateUserProfileSchema: ObjectSchema = Joi.object({
  fullName: Joi.string().optional(),
  email: Joi.string().optional(),
});

export const addPaymentInfoSchema: ObjectSchema = Joi.object({
  accountNumber: Joi.string().required(),
  bankName: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
});
