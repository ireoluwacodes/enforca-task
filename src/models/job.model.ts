import { model, Schema } from "mongoose";
import { IJob } from "../interfaces";

// Declare the Schema of the Mongo model
const jobSchema = new Schema<IJob>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
  applicationDeadline: {
    type: Date,
  },
  requirements: {
    type: [String],
  },
  responsibilities: {
    type: [String],
  },
});

// Export the model
export const Job = model("Job", jobSchema);
