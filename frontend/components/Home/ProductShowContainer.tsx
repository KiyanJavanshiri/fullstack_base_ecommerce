import { API_URL } from "@/config/api";
import { actionGetProducts } from "@/utils/actions";

const ProductShowContainer = async ({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) => {
//   const response = await fetch(
//     `${API_URL}/api/products?category=${category}&subCategory=${subCategory}`,
//   );

//   const products = await response.json();

//   console.log("products: ", products);
    await actionGetProducts({category, subCategory});

  return <div className=""></div>;
};

export default ProductShowContainer