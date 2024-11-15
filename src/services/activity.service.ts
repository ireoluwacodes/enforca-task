import { Activity } from "../models";
import { IActivity } from "../interfaces";

export class ActivityService {
  private activityModel = Activity;

  public async logActivity(activityData: IActivity): Promise<IActivity> {
    const activity = await this.activityModel.create(activityData);
    return activity;
  }

  public async getAllActivities(): Promise<IActivity[]> {
    const activities = await this.activityModel.find().lean();
    return activities;
  }
}
