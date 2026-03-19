import { TLayoutType, TSearchParams } from "@/utils/types";
import { actionGetProducts } from "@/utils/actions";
import ProductCard from "../product/ProductCard";

const ProductsContainer = async ({
  query,
  layout,
}: {
  query: TSearchParams;
  layout: TLayoutType;
}) => {
  const products = await actionGetProducts(query);

  if (!products || products.length === 0) {
    return <p>No products here</p>;
  }

  return (
    <div
      className={`grid ${layout === "multigrid" ? "grid-cols-3" : "grid-cols-2"} gap-x-2 gap-y-4 md:gap-6`}
    >
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsContainer