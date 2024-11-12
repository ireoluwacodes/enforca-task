import { model, Schema } from "mongoose";
import { IUser } from "../interfaces";

// Declare the Schema of the Mongo model
const userSchema = new Schema<IUser>({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
  },
  refreshValidTill: {
    type: Date,
  },
  otp: {
    type: String,
  },
  otpExpiresIn: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true,
  },
});

//Export the model
export const User = model("User", userSchema);