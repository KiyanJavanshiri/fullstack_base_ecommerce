import { API_URL } from "@/config/api";

const ProductShowContainer = async ({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) => {
  const response = await fetch(
    `${API_URL}/api/products?category=${category}&subCategory=${subCategory}`,
  );

  const products = await response.json();

  console.log("products: ", products);
  return <div className=""></div>;
};

export default ProductShowContainer