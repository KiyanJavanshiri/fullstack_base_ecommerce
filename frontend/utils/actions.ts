"use server";
import z from "zod";
import type { TSignInFormState } from "@/app/(auth)/sign-in/page";
import { TSignUpFormState } from "@/app/(auth)/sign-up/page";
import { authSchema } from "./validationSchemas";
import { redirect } from "next/navigation";
import { queryParamsBuilder } from "./queryParamsBuilder";
import { sendRequest } from "./sendRequest";
import { TApiError, TProduct, TSuccessResponseAPI } from "./types";

export type TSearchParams = Partial<{
  category: string;
  subCategory: string;
  brand: string;
}>;

export const actionLogin = async (
  prevState: TSignInFormState,
  formData: FormData,
) => {
  const rawData = Object.fromEntries(formData);
  const validationResult = authSchema
    .pick({ email: true, password: true })
    .safeParse(rawData);

  if (!validationResult.success) {
    return {
      ...prevState,
      message: "validation error",
      success: false,
      errors: z.flattenError(validationResult.error).fieldErrors,
      fields: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    };
  }

  redirect("/");
};

export const actionRegister = async (
  prevState: TSignUpFormState,
  formData: FormData,
) => {
  const rawData = Object.fromEntries(formData);
  const validationResult = authSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      ...prevState,
      message: "validation error",
      success: false,
      errors: z.flattenError(validationResult.error).fieldErrors,
      fields: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        name: formData.get("name") as string,
        username: formData.get("username") as string,
      },
    };
  }

  redirect("/sign-in");
};

export const actionGetProducts = async (params?: TSearchParams) => {
  const query = !params ? "" : queryParamsBuilder(params);
  console.log("query: ", query);
  // const products = await sendRequest<TBaseResponseAPI & { data: TProduct }>(
  //   `/api/products${query}`,
  // );
  const response = await sendRequest<{ data: TProduct[] }>(
    `/api/products${query}`,
  );

  return response?.data;
};
