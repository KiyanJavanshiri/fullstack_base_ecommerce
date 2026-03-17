import { TBaseResponseAPI, TApiError, TSuccessResponseAPI } from "./types";
import { API_URL } from "@/config/api";

export const sendRequest = async <
  TOutput extends object,
  TInput = undefined,
>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: TInput,
  headers?: Record<string, string>,
): Promise<TSuccessResponseAPI<TOutput> | undefined> => {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      method,
      headers: headers ? headers : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = (await response.json()) as TSuccessResponseAPI<TOutput>;

    return data;
  } catch (ex) {
    console.error(ex);
  }
};
