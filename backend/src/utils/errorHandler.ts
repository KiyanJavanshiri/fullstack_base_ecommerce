import type { Request, Response, NextFunction } from "express";
import { validationError } from "./validationError";

export const errorHandler = (
  error: unknown,
  req: Request,
  resp: Response,
  next: NextFunction,
) => {
  const validError = validationError(error);
  const status = validError ? 400 : 500;

  resp.status(validError ? 400 : 500).json({
    success: false,
    status,
    error: validError ?? "server error",
  });
};
