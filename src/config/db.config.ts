import { connect, connection } from "mongoose";
import { localMUrl, nodeEnv, webMUrl } from "./constants.config";

const selectDb = (): string => {
  if (nodeEnv == "production") {
    return webMUrl;
  } else {
    return localMUrl;
  }
};

export const ConnectDb = async () => {
  try {
    console.log("Attempting db connection...");
    await connect(selectDb() as string);

    console.log(`MongoDB Connection Succeeded at ${connection.host}`);
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
