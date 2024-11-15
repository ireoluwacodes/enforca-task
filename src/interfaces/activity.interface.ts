import { Schema } from "mongoose";

export interface IActivity {
  action: string;
  user: Schema.Types.ObjectId;
  timestamp?: Date;
  details?: string;
}
