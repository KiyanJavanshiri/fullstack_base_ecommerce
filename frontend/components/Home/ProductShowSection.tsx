import { Suspense } from "react";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import ProductShowContainer from "./ProductShowContainer";
import ProductsListSkeleton from "../skeletons/ProductsListSkeleton";

const ProductShowSection = ({
  title,
  path,
}: {
  title: string;
  path: { category: string; subCategory: string };
}) => {
  return (
    <section className="mt-10 md:mt-12">
      <div className="flex justify-between items-center mb-8 md:mb-10">
        <h2 className="text-[40px] font-medium leading-11 text-black">
          {title}
        </h2>
        <Link
          className="flex justify-center items-center gap-x-2 underline"
          href={`/products?category=${path.category}&subCategory=${path.subCategory}`}
        >
          <span className="text-sm leading-5.5 text-black font-medium">
            View More
          </span>
          <IoMdArrowForward className="w-4 h-4" />
        </Link>
      </div>
      <Suspense fallback={<ProductsListSkeleton length={4} />}>
        <ProductShowContainer {...path} />
      </Suspense>
    </section>
  );
};

export default ProductShowSection;
