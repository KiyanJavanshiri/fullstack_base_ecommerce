"use client";
import { useShopFilters } from "@/hooks/useShopFilters";
import {
  TFilterFields,
  CategoryMap,
  CATEGORIES,
  CLOTHING_SIZES,
  CLOTHING_SUBCATEGORY,
  SHOES_SUBCATEGORY,
  BRANDS,
} from "@/utils/types";
import { MdFilterList } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import FilterSection from "./components/FilterSection";
import Button from "@/components/buttons/Button";

const FilterAside = () => {
  const { category, filter, handleSelectCategory, handleSelectFilter } =
    useShopFilters();
  return (
    <aside className="hidden md:block max-h-145.5 overflow-y-auto">
      <h3 className="gap-x-2 flex justify-start">
        <MdFilterList className="w-6 h-6" />
        <span className="font-semibold text-[20px] leading-8 text-black">
          Filter
        </span>
      </h3>
      <FilterSection title="Categories">
        <ul className="flex flex-col gap-y-1">
          {[...CATEGORIES].map((ct, i) => (
            <li key={i}>
              <Button
                onClick={() => handleSelectCategory(ct)}
                className={`text-sm leading-5.5 font-medium ${ct === category ? "underline text-black" : "text-[#6C7275]"}`}
              >
                {ct}
              </Button>
            </li>
          ))}
        </ul>
      </FilterSection>
      <FilterSection title="SubCategories">
        <ul className="flex flex-col gap-y-4">
          {(category === "clothing"
            ? [...CLOTHING_SUBCATEGORY]
            : [...SHOES_SUBCATEGORY]
          ).map((sub, i) => (
            <li key={i}>
              <label
                className="relative group flex justify-start items-center gap-x-3"
                htmlFor={`sub-${sub}`}
              >
                <input
                  type="checkbox"
                  className="absolute opacity-0"
                  checked={filter.subCategory?.includes(sub) || false}
                  id={`sub-${sub}`}
                  name="subCategory"
                  onChange={() => {
                    handleSelectFilter("subCategory", sub);
                  }}
                />
                <div
                  className={`relative w-6 h-6 rounded-sm border border-black bg-white group-has-[input:checked]:bg-black`}
                >
                  <FaCheck className="absolute top-1/2 left-1/2 -translate-1/2 text-white hidden group-has-[input:checked]:block" />
                </div>
                <span className="leading-5.5 text-sm font-medium text-black">
                  {sub}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>
      <FilterSection title="Brands">
        <ul className="flex flex-col gap-y-4">
          {[...BRANDS].map((brand, i) => (
            <li key={i}>
              <label
                className="relative group flex justify-start items-center gap-x-3"
                htmlFor={`brand-${brand}`}
              >
                <input
                  type="checkbox"
                  className="absolute opacity-0"
                  checked={filter.brand?.includes(brand) || false}
                  id={`brand-${brand}`}
                  name="Brand"
                  onChange={() => {
                    handleSelectFilter("brand", brand);
                  }}
                />
                <div
                  className={`relative w-6 h-6 rounded-sm border border-black bg-white group-has-[input:checked]:bg-black`}
                >
                  <FaCheck className="absolute top-1/2 left-1/2 -translate-1/2 text-white hidden group-has-[input:checked]:block" />
                </div>
                <span className="leading-5.5 text-sm font-medium text-black">
                  {brand}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </FilterSection>
    </aside>
  );
};

export default FilterAside;
