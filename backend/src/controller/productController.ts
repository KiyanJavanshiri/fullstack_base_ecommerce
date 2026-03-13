import type { Request, Response } from "express";
import { Product } from "../model/Product";
import { asyncHandler } from "../utils/asyncHandler";

export const getAllProducts = asyncHandler(
  async (req: Request, resp: Response) => {
    const products = await Product.find({});
    resp.status(200).json({
      success: true,
      status: 200,
      data: products,
    });
  },
);

export const getProductById = asyncHandler(
  async (req: Request, resp: Response) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      resp.status(404).json({
        success: true,
        status: 404,
        data: null,
      });
      return;
    }
    resp.status(200).json({
      success: true,
      status: 200,
      data: product,
    });
  },
);
