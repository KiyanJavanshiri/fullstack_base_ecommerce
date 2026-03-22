import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "this field is required"],
    },
    username: {
      type: String,
      trim: true,
      required: [true, "this field is required"],
      minLength: [3, "too short username"],
      maxLength: [20, "too long username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "this field is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "incorrect email format"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "this field is required"],
      select: false,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
