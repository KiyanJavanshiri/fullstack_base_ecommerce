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
  const response = await actionGetProducts({ category, subCategory, limit: 4 });

  if (!response) {
    return <p>Something went wrong</p>;
  }

  const {data: products} = response;

  if(products.length === 0) {
    return <p>There is no any products</p>
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
