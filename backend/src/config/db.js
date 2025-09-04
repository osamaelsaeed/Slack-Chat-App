import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("mongodb connected successfully: " + conn.connection.host);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
