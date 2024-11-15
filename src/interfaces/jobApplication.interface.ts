import { Schema } from "mongoose";

export interface IJobApplication {
  user: Schema.Types.ObjectId;
  job: Schema.Types.ObjectId;
  applicationDate?: Date;
  status?: "applied" | "interviewing" | "offered" | "rejected";
}
