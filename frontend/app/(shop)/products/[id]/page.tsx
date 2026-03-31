import { actionGetProductById } from "@/utils/actions";
import Image from "next/image";
import RatingStars from "@/components/product/RatingStars";
import ProductAddForm from "@/components/product/ProductAddForm";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await actionGetProductById(id);

  if (!product) {
    return <p>there is no product</p>;
  }

  const {
    _id,
    images,
    rating,
    title,
    description,
    price,
    sizes,
    stock,
    brand,
    category,
    subCategory,
  } = product;

  return (
    <section className="pt-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
        <div className="w-full h-103.5 md:h-182 relative">
          <Image
            src={images[0] || "/images/product-image.jpg"}
            alt={title}
            priority
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="flex flex-col gap-y-4 pb-6 border-b border-gray-200">
            <RatingStars rating={rating} />
            <h2 className="leading-11 text-[40px] text-black font-medium">
              {title}
            </h2>
            <p className="text-base leading-6.5 text-[#6C7275] font-normal">
              {description}
            </p>
            <p className="text-[28px] leading-8.5 font-medium text-black">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(price)}
            </p>
          </div>
          <ProductAddForm sizes={sizes} stock={stock} productId={_id} />
          <div className="mt-6 flex flex-col gap-y-2">
            <div className="flex justify-start items-center gap-x-14">
              <p className="text-[12px] leading-5 font-normal uppercase text-[#6C7275]">
                Brand
              </p>
              <p className="text-[12px] leading-5 font-normal text-black">
                {brand}
              </p>
            </div>
            <div className="flex justify-start items-center gap-x-14">
              <p className="text-[12px] leading-5 font-normal uppercase text-[#6C7275]">
                Category
              </p>
              <p className="text-[12px] leading-5 font-normal text-black">
                {category}, {subCategory}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
