import { CATEGORIES, CategoryMap } from "@/utils/types";
import Button from "@/components/buttons/Button";
import FilterSection from "./FilterSection";

type TCategorySectionProps = {
  title: string;
  handleSelectCategory: (ct: keyof CategoryMap) => void;
  category: keyof CategoryMap;
};

const CategorySection = ({
  title,
  handleSelectCategory,
  category,
}: TCategorySectionProps) => {
  return (
    <FilterSection title={title}>
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
  );
};

export default CategorySection
