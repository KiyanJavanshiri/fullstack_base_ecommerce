import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CategoryMap, TFilterFields } from "@/utils/types";
import { queryParamsBuilder } from "@/utils/queryParamsBuilder";
import { useDebouncedCallback } from "use-debounce";

export const useShopFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState<keyof CategoryMap>(
    (searchParams.get("category") as keyof CategoryMap) || "clothing",
  );
  const [filter, setFilter] = useState<TFilterFields>({
    subCategory: searchParams
      .get("subCategory")
      ?.split(",") as TFilterFields["subCategory"],
  });

  const handleSelectCategory = (category: keyof CategoryMap) => {
    setCategory(category);
    setFilter((prev) => ({
      ...prev,
      sizes: [],
      subCategory: [],
    }));
  };

  const handleSelectFilter = (field: keyof TFilterFields, value: string) => {
    setFilter((prev) => {
      const current = prev[field] ?? [];

      if (current.includes(value as never)) {
        return {
          ...prev,
          [field]: current.filter((v) => v !== value),
        };
      }
      return {
        ...prev,
        [field]: [...current, value],
      };
    });
  };

  const handleCreateFilter = useDebouncedCallback(() => {
    const queryObj = queryParamsBuilder({ category, ...filter });
    const params = new URLSearchParams(searchParams);
    Object.entries(queryObj).forEach((q) => {
      const [field, value] = q;
      if (value) {
        params.set(field, String(value));
      } else {
        params.delete(field);
      }
    });
    router.push(`/shop?${params.toString()}`, { scroll: false });
  }, 500);

  useEffect(() => {
    handleCreateFilter();
  }, [filter, category]);

  return { category, filter, handleSelectCategory, handleSelectFilter };
};
