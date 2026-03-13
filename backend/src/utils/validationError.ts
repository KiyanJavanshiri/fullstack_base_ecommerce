import mongoose from "mongoose";

export const validationError = (
  error: unknown,
): Record<string, string> | null => {
  const errors: Record<string, string> = {};

  if (error instanceof mongoose.Error.ValidationError) {
    Object.values(error.errors).forEach((err) => {
      errors[err.path] = err.message;
    });

    return errors;
  }

  if (error instanceof mongoose.Error.CastError) {
    errors["message"] = error.message;
    return errors;
  }

  return null;
};
