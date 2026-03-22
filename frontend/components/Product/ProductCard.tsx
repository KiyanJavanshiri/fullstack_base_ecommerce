import { TProduct } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { rating, title, price, _id } = product;

  return (
    <div className="group">
      <Link href={`/products/${_id}`}>
        <div className="relative w-full h-50.75 md:h-87.25 overflow-hidden">
          <Image
            src={"/images/product-image.jpg"}
            alt={title}
            priority
            fill
            className="transition-transform duration-100 ease-in-out group-hover:scale-120 object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-1 mt-3">
          <RatingStars rating={rating} />
          <h3 className="text-base leading-6.5 text-black font-medium text-ellipsis line-clamp-1">
            {title}
          </h3>
          <p className="text-sm leading-5.5 text-black font-medium text-ellipsis line-clamp-1">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
