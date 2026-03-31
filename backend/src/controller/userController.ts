import { User } from "../model/User";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { Product } from "../model/Product";
import { Request, Response } from "express";

export const registerUser = asyncHandler(async (req, resp) => {
  if (!req.body.password) {
    resp.status(400).json({
      success: false,
      status: 400,
      message: "password was not found",
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({ ...req.body, password: hashedPassword });

  resp.status(201).json({
    success: true,
    status: 201,
    data: user,
  });
});

export const loginUser = asyncHandler(async (req, resp) => {
  const user = await User.findOne({ email: req.body.email }).select({
    password: true,
  });

  if (!user) {
    resp.status(404).json({
      success: false,
      status: 404,
      message: `user with email ${req.body.email} was not found`,
    });
    return;
  }

  const isCorrectPassword = await bcrypt.compare(
    req.body.password,
    user.password,
  );

  if (!isCorrectPassword) {
    resp.status(400).json({
      success: false,
      status: 404,
      message: `wrong email or password`,
    });
    return;
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY!);

  resp.status(200).json({
    success: true,
    status: 201,
    data: {
      token,
    },
  });
});

export const getUsersCart = asyncHandler(async (req, resp) => {
  const userId = resp.locals.userId as string;

  const products = await User.findById(userId)
    .populate("cart.productId")
    .select("cart");

  resp.status(200).json({
    success: true,
    status: 200,
    data: products,
  });
});

export const addProductToCart = async (req: Request, resp: Response) => {
  const userId = resp.locals.userId as string;
  const { productId, quantity, selectedSize } = req.body;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const product = await Product.findOneAndUpdate(
      { _id: productId, stock: { $gte: quantity } },
      { $inc: { stock: -quantity } },
      { returnDocument: "after", session },
    );

    if (!product) {
      await session.abortTransaction();
      resp.status(400).json({
        success: false,
        status: 400,
        message: "Not enough stock or product not found",
      });
      return;
    }

    let updatedUser = await User.findOneAndUpdate(
      {
        _id: userId,
        "cart.productId": productId,
      },
      {
        $inc: { "cart.$.quantity": quantity },
      },
      { returnDocument: "after", session },
    );

    if (!updatedUser) {
      updatedUser = await User.findOneAndUpdate(
        {
          _id: userId,
          "cart.productId": { $ne: productId },
        },
        {
          $push: { cart: { productId, quantity, selectedSize } },
        },
        { returnDocument: "after", session },
      );
    }

    if (!updatedUser) {
      await session.abortTransaction();
      resp.status(404).json({
        success: false,
        status: 404,
        message: "User was not found",
      });
      return;
    }

    await session.commitTransaction();

    resp.status(201).json({
      success: true,
      status: 201,
      data: updatedUser,
    });
  } catch (ex) {
    await session.abortTransaction();

    resp.status(500).json({
      success: false,
      status: 500,
      message: "Something went wrong",
    });
  } finally {
    session.endSession();
  }
};
