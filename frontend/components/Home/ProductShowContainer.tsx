import { actionGetProducts } from "@/utils/actions";

const ProductShowContainer = async ({
  category,
  subCategory,
}: {
  category: string;
  subCategory: string;
}) => {
  const products = await actionGetProducts({ category, subCategory });

  if (!products) {
    return <p>No any products here</p>;
  }

  return (
    <div className="">
      {products.map((product) => (
        <p key={product._id}>{product.title}</p>
      ))}
    </div>
  );
};

export default ProductShowContainer;
