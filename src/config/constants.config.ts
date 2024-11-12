import { config } from "dotenv";

config();

export const PORT: string = process.env.PORT || "3000";
export const secret = process.env.JWT_SECRET as string;
export const localMUrl = process.env.LOCAL_MONGO_URL as string;
export const webMUrl = process.env.MONGO_URL as string;
export const nodeEnv = process.env.NODE_ENV as string;
