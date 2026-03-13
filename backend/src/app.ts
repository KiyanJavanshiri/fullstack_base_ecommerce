import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.APP_PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}...`);
    });
  } catch (ex) {
    console.error(ex);
  }
};

start();
