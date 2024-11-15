import { model, Schema } from "mongoose";
import { IJobApplication } from "../interfaces";

// Declare the Schema of the Mongo model
const jobApplicationSchema = new Schema<IJobApplication>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["applied", "interviewing", "offered", "rejected"],
    default: "applied",
  },
});

// Export the model
export const JobApplication = model("JobApplication", jobApplicationSchema);
