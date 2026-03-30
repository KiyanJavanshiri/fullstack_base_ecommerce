import type { Request, Response } from "express";
import { Product } from "../model/Product";
import { asyncHandler } from "../utils/asyncHandler";
import { buildProductFilter } from "../utils/getProductsFilter";

export const getAllProducts = asyncHandler(
  async (req: Request, resp: Response) => {
    const { page = 1, limit = 10, projection, sort } = req.query;
    const filter = buildProductFilter(req.query);

    const totalProducts = await Product.countDocuments(filter);

    let result = Product.find(filter);

    if (sort) {
      result.sort(sort as string);
    }

    const pageNumber = (+page - 1) * +limit;

    result = result.skip(pageNumber).limit(+limit);

    if (projection) {
      const filedList = projection.toString().replaceAll(",", " ");
      result = result.select(filedList);
    }

    const products = await result;
    const totalPages = Math.ceil(totalProducts / +limit);

    resp.status(200).json({
      success: true,
      status: 200,
      data: products,
      count: products.length,
      page: pageNumber + 1,
      totalPages,
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
