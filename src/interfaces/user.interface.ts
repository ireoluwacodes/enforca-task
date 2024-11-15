import { Schema } from "mongoose";

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  hash: string;
  accessToken?: string;
  refreshValidTill: Date;
  otp?: string;
  otpExpiresIn: Date;
  role: "admin" | "user";
  jobApplications?: Schema.Types.ObjectId[];
}
