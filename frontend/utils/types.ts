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

export type TSuccessResponseAPI<T extends object> = TBaseResponseAPI & T

export type TApiError = TBaseResponseAPI & {
  error: Record<string, string> | string;
};
