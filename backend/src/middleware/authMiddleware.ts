import type { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = async (
  req: Request,
  resp: Response,
  next: NextFunction,
) => {
  const authorization = req.headers["authorization"];

  if (!authorization || !authorization.startsWith("Bearer ")) {
    resp.status(401).json({
      success: false,
      status: 401,
      message: "Unauthorization failed",
    });
    return;
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!,
    ) as JwtPayload & { id: string };
    resp.locals.userId = id;
    next();
  } catch (ex) {
    next(ex);
  }
};
