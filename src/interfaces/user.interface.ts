export interface IUser {
  fullName: string;
  email: string;
  accessToken: string;
  refreshValidTill: Date;
  otpExpiresIn: Date;
  hash: string;
  otp: string;
  role: string;
  _id: string;
}
