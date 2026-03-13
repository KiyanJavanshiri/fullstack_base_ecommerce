import type { Request, Response, NextFunction } from "express";

export const asyncHandler = (
  fn: (req: Request, resp: Response, next?: NextFunction) => Promise<void>,
) => {
  return async (req: Request, resp: Response, next: NextFunction) => {
    try {
      await fn(req, resp, next);
    } catch (ex) {
      next(ex);
    }
  };
};
