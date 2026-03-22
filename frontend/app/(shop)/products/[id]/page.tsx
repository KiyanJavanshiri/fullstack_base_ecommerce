import { actionGetProductById } from "@/utils/actions";
import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";
import RatingStars from "@/components/product/RatingStars";
import Button from "@/components/buttons/Button";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await actionGetProductById(id);

  if (!product) {
    return <p>there is no product</p>;
  }

  const {
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
          <div className="mt-6">
            <h3 className="text-base leading-6.5 text-[#6C7275] font-medium mb-2">
              Sizes
            </h3>
            <ul className="flex justify-start items-center gap-4">
              {sizes.map((size, i) => (
                <li
                  className="px-4 py-2 cursor-pointer rounded-sm border border-gray-300 text-base leading-6.5 font-medium text-black"
                  key={i}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-base leading-6.5 font-medium text-green-500">
              In Stock:
            </p>
            <p className="text-base leading-6.5 font-medium text-black">
              {stock}
            </p>
          </div>
          <div className="mt-4 pb-6 border-b border-gray-200">
            <Button className="w-full py-1 bg-black text-white text-sm leading-6 font-normal rounded-sm md:py-2.5 md:rounded-lg md:text-lg md:leading-8">
              Add to Cart
            </Button>
          </div>
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
