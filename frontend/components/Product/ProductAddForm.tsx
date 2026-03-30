"use client";
import { useState, useActionState } from "react";
import { handleProductAction } from "@/utils/actions";
import Button from "../buttons/Button";
import { FaRegHeart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

type ProductAddFormProps = {
  productId: string;
  sizes: string[];
  stock: number;
};

const ProductAddForm = ({ sizes, stock, productId }: ProductAddFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const [state, action, isPending] = useActionState(
    handleProductAction,
    undefined,
  );
  const handleChangeQuantity = (action: "add" | "sub") => {
    setQuantity((prev) => {
      if (action === "add") {
        return prev + 1;
      } else {
        if (prev > 1) {
          return prev - 1;
        }
        return 1;
      }
    });
  };

  return (
    <form action={action}>
      <div className="mt-6">
        <h3 className="text-base leading-6.5 text-[#6C7275] font-medium mb-2">
          Sizes
        </h3>
        <ul className="flex justify-start items-center gap-4">
          {sizes.map((size, i) => (
            <li className="cursor-pointer" key={i}>
              <label
                htmlFor={`size-${size}`}
                className="relative px-4 py-2 rounded-sm border border-gray-300 text-base leading-6.5 font-medium text-black group has-[input:checked]:bg-gray-200"
              >
                <input
                  type="radio"
                  name="size"
                  id={`size-${size}`}
                  value={size}
                  className="absolute opacity-0 inset-0"
                />
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-base leading-6.5 font-medium text-green-500">
          In Stock:
        </p>
        <p className="text-base leading-6.5 font-medium text-black">{stock}</p>
      </div>
      <div className="mt-4 pb-6 border-b border-gray-200">
        <div className="flex justify-between items-center gap-x-2 md:gap-x-6 mb-4">
          <div className="flex justify-center items-center gap-x-3 md:gap-x-6 py-1.5 px-2 rounded-sm bg-gray-100 md:py-3 md:px-4 md:rounded-lg">
            <Button onClick={() => handleChangeQuantity("sub")}>
              <FaMinus className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
            <span className="text-[12px] leading-5 text-black font-semibold md:text-base md:leading-6.5">
              {quantity}
            </span>
            <Button onClick={() => handleChangeQuantity("add")}>
              <FaPlus className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
          <Button className="py-1 md:py-2.5 w-full flex justify-center items-center gap-x-2 border border-black rounded-sm md:rounded-lg">
            <FaRegHeart className="w-4 h-4 md:w-6 md:h-6" />
            <span className="leading-6 text-sm font-medium text-black md:text-[18px] md:leading-8">
              Wishlist
            </span>
          </Button>
        </div>
        <input type="hidden" name="quantity" value={quantity} />
        <input type="hidden" name="productId" value={productId} />
        <Button
          disabled={isPending}
          name="action"
          value="addToCart"
          type="submit"
          className="w-full py-1 bg-black text-white text-sm leading-6 font-normal rounded-sm md:py-2.5 md:rounded-lg md:text-lg md:leading-8 disabled:bg-gray-700"
        >
          {isPending ? "Adding..." : "Add to Cart"}
        </Button>
      </div>
    </form>
  );
};

export default ProductAddForm;
