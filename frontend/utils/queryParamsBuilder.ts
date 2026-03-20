import { TFilterFields, TSearchParams } from "./types";

export const queryParamsBuilder = (
  params: TSearchParams | TFilterFields,
) => {
  const queryObj: Record<string,string | number> = {};

  Object.entries(params).forEach(([key, value]) => {
    const val =
      typeof value === "object" && value !== null ? value.join(",") : value;
    queryObj[key] = val;
  });

  return queryObj
};
