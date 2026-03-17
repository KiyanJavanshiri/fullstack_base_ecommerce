import { API_URL } from "@/config/api";
import { actionGetProducts } from "@/utils/actions";

const ProductShowContainer = async ({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) => {
  const products = await actionGetProducts({ category, subCategory });
  
  return <div className=""></div>;
};

export default ProductShowContainer;
