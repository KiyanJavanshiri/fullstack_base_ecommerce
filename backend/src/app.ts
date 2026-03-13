import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}...`);
});
