import { model, Schema } from "mongoose";
import { IActivity } from "../interfaces";

const activitySchema = new Schema<IActivity>({
  action: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  details: {
    type: String,
  },
});

export const Activity = model("Activity", activitySchema);
