import { getProductById } from "./../controller/productController";
const operatorMapper: Record<string, string> = {
  ">": "$gt",
  "<": "$lt",
  ">=": "$gte",
  "<=": "$lte",
};

export function buildProductFilter(query: any) {
  const { category, subCategory, numericFilter, brand, gender, sizes } = query;

  const filter: Record<string, any> = {};

  if (category) filter.category = {$in: String(category).split(",")};
  if (subCategory) filter.subCategory = {$in: String(subCategory).split(",")};
  if (brand) filter.brand = {$in: String(brand).split(",")};
  if (gender) filter.gender = { $in: String(gender).split(",") };
  if (sizes) filter.sizes = { $in: String(sizes).toUpperCase().split(",") };

  if (numericFilter) {
    const refactoredFilter = String(numericFilter).replace(
      /\b(<|>|<=|>=)\b/g,
      (match) => `-${operatorMapper[match]}-`,
    );

    const options = ["price", "rating"];

    refactoredFilter.split(",").forEach((item: string) => {
      const [field, operator, value] = item.split("-");

      if (options.includes(field)) {
        filter[field] = { [operator]: Number(value) };
      }
    });
  }

  return filter;
}
