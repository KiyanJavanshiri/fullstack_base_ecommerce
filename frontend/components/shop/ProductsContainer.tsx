import { TLayoutType, TSearchParams } from "@/utils/types";
import { actionGetProducts } from "@/utils/actions";
import ProductCard from "../product/ProductCard";
import NextPageButton from "./NextPageButton";

const ProductsContainer = async ({
  query,
  layout,
}: {
  query: TSearchParams;
  layout: TLayoutType;
}) => {
  const response = await actionGetProducts(query);

  if (!response) {
    return <p>something went wrong</p>;
  }

  const { data: products, totalPages } = response;

  if (products.length === 0) {
    return <p>There is no any products</p>;
  }

  return (
    <div className="">
      <div
        className={`grid ${layout === "multigrid" ? "grid-cols-3" : "grid-cols-2"} gap-x-2 gap-y-4 md:gap-6`}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <NextPageButton totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ProductsContainer;
