import { Schema } from "mongoose";

export interface IJob {
  title: string;
  createdBy: Schema.Types.ObjectId;
  description: string;
  company: string;
  location: string;
  salary?: number;
  postedDate?: Date;
  applicationDeadline?: Date;
  requirements?: string[];
  responsibilities?: string[];
}
