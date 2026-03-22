import { LAYOUTS } from "@/utils/links";
import { queryParamsBuilder } from "@/utils/queryParamsBuilder";
import { TLayoutType, TSearchParams } from "@/utils/types";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import ProductsContainer from "@/components/shop/ProductsContainer";
import ProductFilterButton from "@/compositions/ProductFilterButton";
import FilterAside from "@/compositions/FilterAside/FilterAside";
import { Suspense } from "react";
import ProductsListSkeleton from "@/components/skeletons/ProductsListSkeleton";

const ShopPage = async ({
  searchParams,
}: {
  searchParams: Promise<TSearchParams & { layout?: TLayoutType }>;
}) => {
  const params = await searchParams;
  const { layout: currentLayout, ...restParams } = params;
  let filter = "";
  Object.entries(queryParamsBuilder(restParams)).forEach((q) => {
    const [field, value] = q;
    filter += `${field}=${value} `;
  });

  const layout = currentLayout ?? "grid";

  return (
    <section>
      <PageBanner
        title="Shop Page"
        description="Let’s design the place you always imagined."
        bgImage="/images/slide-1.jpg"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[262px_1fr] mt-8 md:mt-15">
        <FilterAside />
        <div>
          <div className="mb-10 md:mb-16 flex justify-between items-center">
            <h2 className="text-base leading-6.5 text-black font-semibold capitalize md:text-[20px] md:leading-8">
              {restParams.category ? restParams.category : "All Categories"}
            </h2>
            <div className="flex justify-center items-center gap-x-4">
              <ProductFilterButton />
              {LAYOUTS.map(({ type, Icon }, i) => (
                <Link
                  key={i}
                  href={`/shop?${filter.trim().split(" ").join("&") + (filter.length <= 1 ? "" : "&")}layout=${type}`}
                  className={`px-2.75 py-2 ${layout === type ? "bg-[#E8ECEF]" : "bg-white"} rounded-sm`}
                >
                  <Icon
                    className={`w-6 h-6 ${layout === type ? "text-black" : "text-[#6C7275]"}`}
                  />
                </Link>
              ))}
            </div>
          </div>
          <Suspense
            fallback={<ProductsListSkeleton length={8} layout={layout} />}
          >
            <ProductsContainer query={restParams} layout={layout} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
