"use server";
import z from "zod";
import { API_URL } from "@/config/api";
import type { TSignInFormState } from "@/app/(auth)/sign-in/page";
import { TSignUpFormState } from "@/app/(auth)/sign-up/page";
import { authSchema } from "./validationSchemas";
import { redirect } from "next/navigation";
import { queryParamsBuilder } from "./queryParamsBuilder";

export type TSearchParams = Partial<{
  category: string;
  subCategory: string;
  brand: string;
}>

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
  const response = await fetch(`${API_URL}/api/products${query}`);
}