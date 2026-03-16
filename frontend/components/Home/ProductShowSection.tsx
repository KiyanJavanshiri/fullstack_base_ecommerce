import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import ProductShowContainer from "./ProductShowContainer";

const ProductShowSection = ({
  title,
  path,
}: {
  title: string;
  path: { category: string; subCategory: string };
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
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
      <ProductShowContainer {...path} />
    </section>
  );
};

export default ProductShowSection;
