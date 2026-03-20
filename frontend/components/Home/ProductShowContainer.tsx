import { actionGetProducts } from "@/utils/actions";
import ProductCard from "../product/ProductCard";
import { CategoryMap } from "@/utils/types";

const ProductShowContainer = async ({
  category,
  subCategory,
}: {
  category: keyof CategoryMap;
  subCategory: CategoryMap[keyof CategoryMap][];
}) => {
  const products = await actionGetProducts({ category, subCategory, limit: 4 });

  if (!products || products.length === 0) {
    return <p>No any products here</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-6 md:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product}/>
      ))}
    </div>
  );
};

export default ProductShowContainer;
