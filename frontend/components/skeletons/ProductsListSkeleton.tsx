import { TLayoutType } from "@/utils/types";

const ProductsListSkeleton = ({
  length,
  layout,
}: {
  length: number;
  layout?: TLayoutType;
}) => {
  return (
    <div
      className={`grid ${layout ? (layout === "grid" ? "grid-cols-2" : "grid-cols-3") : "grid-cols-2 md:grid-cols-4"} gap-x-2 gap-y-4 md:gap-6`}
    >
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="h-70.25 md:h-108.25 w-full bg-gray-200"></div>
      ))}
    </div>
  );
};

export default ProductsListSkeleton;
