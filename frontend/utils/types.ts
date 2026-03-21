import { IconType } from "react-icons";

export type TProduct = {
  _id: string;
  title: string;
  description: string;
  category: "shoes" | "clothing";
  subCategory: string;
  brand: "nike" | "adidas" | "new-balance";
  gender: "men" | "women" | "unisex";
  sizes: string[];
  price: number;
  rating: number;
  stock: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type TBaseResponseAPI = {
  success: boolean;
  status: number;
};

export type TSuccessResponseAPI<T extends object> = TBaseResponseAPI & T;

export type TApiError = TBaseResponseAPI & {
  error: Record<string, string> | string;
};

export type TSearchParams = Partial<{
  category: keyof CategoryMap;
  subCategory?: CategoryMap[keyof CategoryMap][];
  sizes?: ProductSizes[keyof CategoryMap][];
  brand?: (typeof BRANDS)[number][];
  limit: number;
}>;

export type TLayoutType = "grid" | "multigrid";

export const CATEGORIES = ["clothing", "shoes"] as const;
export const CLOTHING_SIZES = ["XS", "S", "M", "L", "XL"] as const;
export const SHOE_SIZES = [
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
] as const;
export const CLOTHING_SUBCATEGORY = [
  "t-shirts",
  "jackets",
  "hoodie",
  "shorts",
] as const;
export const SHOES_SUBCATEGORY = ["sneakers"] as const;
export const BRANDS = ["nike", "new-balance", "adidas"] as const;

export type TPath = {
  title: string;
  path: string;
};

export type TLayout = {
  type: TLayoutType;
  Icon: IconType;
};

export type TSocialLinks = Omit<TPath, "title"> & { Icon: IconType };

export type CategoryMap = {
  clothing: (typeof CLOTHING_SUBCATEGORY)[number];
  shoes: (typeof SHOES_SUBCATEGORY)[number];
};

export type ProductSizes = {
  clothing: (typeof CLOTHING_SIZES)[number];
  shoes: (typeof SHOE_SIZES)[number];
};

export type TCategoryLinks<T extends keyof CategoryMap> = Omit<
  TPath,
  "path"
> & {
  img: string;
  category: T;
  subCategory: CategoryMap[T];
};

export type TFilterFields = Partial<{
  subCategory: CategoryMap[keyof CategoryMap][];
  sizes: ProductSizes[keyof CategoryMap][];
  brand: (typeof BRANDS)[number][];
}>;
