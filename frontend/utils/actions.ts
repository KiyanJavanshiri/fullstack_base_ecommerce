"use server";
import z from "zod";
import type { TSignInFormState } from "@/app/(auth)/sign-in/page";
import { TSignUpFormState } from "@/app/(auth)/sign-up/page";
import { authSchema } from "./validationSchemas";
import { redirect } from "next/navigation";
import { queryParamsBuilder } from "./queryParamsBuilder";
import { sendRequest } from "./sendRequest";
import { TProduct, TSearchParams, TUser } from "./types";
import { AddProductFormState } from "@/components/product/ProductAddForm";
import { cookies } from "next/headers";

export const actionGetSession = async () => {
  const cookie = await cookies();
  return cookie.get("token") as string | undefined;
};

export const actionLogout = async () => {
  const cookie = await cookies();
  cookie.delete("token");
  redirect("/");
};

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

  const data = validationResult.data;

  const response = await sendRequest<{ data: { token: string } }, typeof data>(
    "/api/users/login",
    "POST",
    data,
  );

  if (!response) {
    return {
      ...prevState,
      success: false,
      message: "something went wrong on login",
      fields: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    };
  }

  const cookie = await cookies();
  cookie.set("token", response.data.token);

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

  const data = validationResult.data;

  const response = await sendRequest<{ data: TUser }, typeof data>(
    "/api/users/register",
    "POST",
    data,
  );

  if (!response) {
    return {
      ...prevState,
      success: false,
      message: "something went wrong on login",
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
  const queryObj = !params ? {} : queryParamsBuilder(params);
  const searchParams = new URLSearchParams();
  Object.entries(queryObj).forEach((q) => {
    const [field, value] = q;
    searchParams.set(field, String(value));
  });
  const response = await sendRequest<{
    data: TProduct[];
    count: number;
    page: number;
    totalPages: number;
  }>(`/api/products?${searchParams.toString()}`);

  return response;
};

export const actionGetProductById = async (id: string) => {
  const response = await sendRequest<{ data: TProduct }>(`/api/products/${id}`);
  return response?.data;
};

export const handleProductAction = async (
  state: AddProductFormState,
  formData: FormData,
) => {
  const action = formData.get("action") as string;
  const size = formData.get("size") as string;
  const quantity = formData.get("quantity") as string;
  const productId = formData.get("size") as string;

  const cookie = await cookies();
  const token = cookie.get("token");

  if (!token) {
    return {
      success: false,
      message: "Please login to do this action",
    };
  }

  if (action === "addToCart") {
    if (!size) {
      return {
        success: false,
        message: "Select size of product",
      };
    }

    const response = await sendRequest(
      "/api/users",
      "POST",
      { selectedSize: size, productId, quantity },
      {
        authorization: `Bearer ${token}`,
      },
    );
    return {
      success: true,
      message: "Product was added to your cart",
    };
  } else {
    //
  }
};
