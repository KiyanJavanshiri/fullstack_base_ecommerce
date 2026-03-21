"use client";
import { useShopFilters } from "@/hooks/useShopFilters";
import {
  CATEGORIES,
  CLOTHING_SIZES,
  CLOTHING_SUBCATEGORY,
  SHOES_SUBCATEGORY,
  BRANDS,
  TFilterFields,
} from "@/utils/types";
import { MdFilterList } from "react-icons/md";
import CategorySection from "./components/CategorySection";
import CheckBoxFilter from "./components/CheckBoxFilter";

const FilterAside = () => {
  const { category, filter, handleSelectCategory, handleSelectFilter } =
    useShopFilters();

  const isSelected = <T extends keyof TFilterFields>(
    field: T,
    option: Required<TFilterFields>[T][number],
  ) => {
    return filter[field]?.includes(option as never) ?? false;
  };
  return (
    <aside className="hidden md:block max-h-145.5 overflow-y-auto">
      <h3 className="gap-x-2 flex justify-start">
        <MdFilterList className="w-6 h-6" />
        <span className="font-semibold text-[20px] leading-8 text-black">
          Filter
        </span>
      </h3>
      <CategorySection
        title="Categories"
        category={category}
        handleSelectCategory={handleSelectCategory}
      />
      <CheckBoxFilter<"subCategory">
        title="SubCategories"
        handleSelectFilter={handleSelectFilter}
        name="subCategory"
        isSelected={isSelected}
        options={
          (category === "clothing"
            ? CLOTHING_SUBCATEGORY
            : SHOES_SUBCATEGORY) as unknown as TFilterFields["subCategory"]
        }
      />
      <CheckBoxFilter<"brand">
        title="Brands"
        handleSelectFilter={handleSelectFilter}
        name="brand"
        isSelected={isSelected}
        options={BRANDS as unknown as TFilterFields["brand"]}
      />
    </aside>
  );
};

export default FilterAside;
