import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./router/product";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRouter);

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
