import { Router } from "express";
import { AuthController } from "../controllers";
import { authMiddleware, successHandler, validator } from "../middleware";
import {
  createUserSchema,
  forgotSchema,
  loginSchema,
  otpSchema,
  passwordSchema,
} from "../validators";

const authController = new AuthController();

export const AuthRouter = Router();

AuthRouter.route("/register").post(
  validator(createUserSchema),
  authController.register,
  successHandler,
);

AuthRouter.route("/login").post(
  validator(loginSchema),
  authController.login,
  successHandler,
);

AuthRouter.route("/refresh/:token").get(authController.refresh, successHandler);

AuthRouter.route("/forgot-pass").post(
  validator(forgotSchema),
  authController.forgotPassword,
  successHandler,
);

AuthRouter.route("/confirm-otp").post(
  validator(otpSchema),
  authController.confirmOtp,
  successHandler,
);

AuthRouter.route("/reset-pass").post(
  validator(passwordSchema),
  authMiddleware,
  authController.resetPassword,
  successHandler,
);

AuthRouter.route("/logout").get(
  authMiddleware,
  authController.logout,
  successHandler,
);
