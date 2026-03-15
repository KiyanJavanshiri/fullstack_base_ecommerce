import z from "zod";

export const authSchema = z.object({
  name: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "this field is required" : "",
    })
    .trim()
    .max(20, "too long name")
    .min(1, "add at least 1 symbol"),
  username: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "this field is required" : "",
    })
    .trim()
    .max(20, "too long username")
    .min(1, "add at least 1 symbol"),
  email: z.email({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: (issue) =>
      issue.input === undefined
        ? "this field is required"
        : "wrong email format",
  }),
  password: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "this field is required" : "",
    })
    .trim()
    .max(20, "too long name")
    .min(6, "add at least 6 symbol"),
});

export type TAuthFormState<T> = {
  errors?: z.core.$ZodFlattenedError<T>["fieldErrors"];
  success: boolean;
  message: string;
  fields: T;
};
