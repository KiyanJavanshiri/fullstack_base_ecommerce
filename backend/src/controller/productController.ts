import type { Request, Response } from "express";
import { Product } from "../model/Product";

export const getAllProducts = async (req: Request, resp: Response) => {
  try {
    const products = await Product.find({});
    resp.status(200).json({
      success: true,
      status: 200,
      data: products,
    });
  } catch (ex) {
    console.error(ex);
    resp.status(500).json({
      success: false,
      status: 500,
      message: "server error",
    });
  }
};

export const getProductById = async (req: Request, resp: Response) => {
  try {
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
  } catch (ex) {
    console.error(ex);
    resp.status(500).json({
      success: false,
      status: 500,
      message: "server error",
    });
  }
};
