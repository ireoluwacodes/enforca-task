import { Router } from "express";
import { UserController } from "../controllers";
import { authMiddleware, successHandler, validator } from "../middleware";
import { addPaymentInfoSchema, updateUserProfileSchema } from "../validators";

const userController = new UserController();

export const UserRouter = Router();

UserRouter.route("/update-profile").post(
  authMiddleware,
  validator(updateUserProfileSchema),
  userController.updateUserProfile,
  successHandler,
);

UserRouter.route("/add-payment-info").post(
  authMiddleware,
  validator(addPaymentInfoSchema),
  userController.addPaymentInfo,
  successHandler,
);

UserRouter.route("/delete-account").delete(
  authMiddleware,
  userController.deleteUserAccount,
  successHandler,
);
