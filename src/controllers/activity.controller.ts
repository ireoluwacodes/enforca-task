import { NextFunction, Response } from "express";
import { ActivityService } from "../services/activity.service";
import { CREATED } from "http-status";
import { ProtectedRequest } from "../interfaces";

export class ActivityController {
  private activityService = new ActivityService();

  public async getAllActivities(
    req: ProtectedRequest,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const activities = await this.activityService.getAllActivities();
      const data = {
        statusCode: CREATED,
        data: activities,
        message: "Activities retrieved Successfully",
      };
      req.data = data;
      next();
    } catch (error) {
      next(error);
    }
  }
}
