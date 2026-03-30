import { User } from "../model/User";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import bcrypt from "bcryptjs";

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

export const addProductToCart = asyncHandler(async (req, resp) => {
  const userId = resp.locals.userId as string;
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: { cart: req.body },
    },
    { returnDocument: "after" },
  );

  if (!updatedUser) {
    resp.status(404).json({
      success: false,
      status: 404,
      message: `user with id ${userId} was not found`,
    });
    return;
  }

  resp.status(201).json({
    success: true,
    status: 201,
    data: updatedUser,
  });
});
