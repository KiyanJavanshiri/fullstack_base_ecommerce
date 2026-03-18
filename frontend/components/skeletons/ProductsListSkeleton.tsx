const ProductsListSkeleton = ({ length }: { length: number }) => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-6 md:grid-cols-4">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="h-70.25 md:h-115.25 w-full bg-gray-400"></div>
      ))}
    </div>
  );
};

export default ProductsListSkeleton