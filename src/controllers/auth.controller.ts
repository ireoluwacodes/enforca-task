import { NextFunction, Response } from "express";
import { CREATED, OK } from "http-status";
import { validateDbId } from "../utils";
import { AuthService } from "../services";
import { ProtectedRequest } from "../interfaces";

const authService = new AuthService();

export class AuthController {
  public async register(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { email, password, fullName } = req.body;

      const user = await authService.register(fullName, email, password);
      const data = {
        statusCode: CREATED,
        data: user,
        message: "User Created Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async login(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { email, password } = req.body;

      const user = await authService.login(email, password);

      const data = {
        statusCode: OK,
        data: user,
        message: "Login Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }

  public async refresh(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { token } = req.params;

      const user = await authService.refresh(token);

      const data = {
        statusCode: OK,
        data: user,
        message: "success",
      };
      req.data = data;
      next();
    } catch (error: any) {
      next(error);
    }
  }

  public async logout(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = req.user?.sub as string;
      await validateDbId(id);
      await authService.logout(id);
      const data = {
        statusCode: OK,
        message: "success",
      };
      req.data = data;
      next();
    } catch (error: any) {
      next(error);
    }
  }
  public async forgotPassword(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { email } = req.body;

      await authService.forgotAuth(email);

      const data = {
        statusCode: OK,
        message: "success",
      };
      req.data = data;
      next();
    } catch (error: any) {
      next(error);
    }
  }
  public async confirmOtp(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { email, otp } = req.body;

      const user = await authService.confirmOtp(otp, email);

      const data = {
        statusCode: OK,
        message: "success",
        data: user,
      };
      req.data = data;
      next();
    } catch (error: any) {
      next(error);
    }
  }
  public async resetPassword(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const id = req.user?.sub as string;
      await validateDbId(id);

      const { password } = req.body;

      await authService.resetPass(id, password);

      const data = {
        statusCode: OK,
        message: "success",
      };

      req.data = data;
      next();
    } catch (error: any) {
      next(error);
    }
  }
}
