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
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      resp.status(404).json({
        success: true,
        status: 404,
        message: `Product with id ${id} was not found`,
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

export const createProduct = asyncHandler(
  async (req: Request, resp: Response) => {
    const createdProduct = await Product.create(req.body);
    resp.status(201).json({
      success: true,
      status: 201,
      data: createdProduct,
    });
  },
);

export const deleteProductById = asyncHandler(
  async (req: Request, resp: Response) => {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      resp.status(404).json({
        success: false,
        status: 404,
        message: `Product with id ${id} was not found`,
      });

      return;
    }

    resp.status(200).json({
      success: true,
      status: 200,
    });
  },
);
