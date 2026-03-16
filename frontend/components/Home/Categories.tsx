import { CATEGORIES_LINKS } from "@/utils/links";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <section className="mt-10 md:mt-12 text-center">
      <h2 className="text-[40px] font-medium leading-11 text-black">
        Shop by Categories
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-6 md:mt-12 md:grid-cols-3 md:gap-6 xl:grid-cols-6">
        {CATEGORIES_LINKS.map((category, i) => (
          <CategoryCard key={i} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
