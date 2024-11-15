import { NextFunction, Response } from "express";
import { OK } from "http-status";
import { UserService } from "../services/user.service";
import { ProtectedRequest } from "../interfaces";

const userService = new UserService();

export class UserController {
  public async updateUserProfile(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const userId = req.user?.sub as string;
      const updateData = req.body;
      const user = await userService.updateUserProfile(userId, updateData);
      const data = {
        statusCode: OK,
        data: user,
        message: "User Profile Updated Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async deleteUserAccount(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const userId = req.user?.sub as string;
      await userService.deleteUserAccount(userId);
      const data = {
        statusCode: OK,
        message: "User Account Deleted Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async addPaymentInfo(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const userId = req.user?.sub as string;
      const paymentInfo = req.body;
      const user = await userService.addPaymentInfo(userId, paymentInfo);
      const data = {
        statusCode: OK,
        data: user,
        message: "Payment Information Added Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}
