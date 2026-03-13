import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
} from "../controller/productController";

const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProductById).delete(deleteProductById);

export default router;
