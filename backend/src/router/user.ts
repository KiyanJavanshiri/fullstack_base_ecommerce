import express from "express";
import {
  registerUser,
  loginUser,
  getUsersCart,
  addProductToCart,
} from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router
  .route("/cart")
  .get(authMiddleware, getUsersCart)
  .post(authMiddleware, addProductToCart);

export default router;
