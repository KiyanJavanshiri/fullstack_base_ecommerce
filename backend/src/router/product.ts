import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
} from "../controller/productController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getAllProducts).post(authMiddleware, createProduct);
router.route("/:id").get(getProductById).delete(authMiddleware, deleteProductById);

export default router;
