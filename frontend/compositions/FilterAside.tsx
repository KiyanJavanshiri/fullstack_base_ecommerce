import { MdFilterList } from "react-icons/md";

const FilterAside = () => {
  return (
    <aside className="hidden md:block">
      <h3 className="gap-x-2 flex justify-start">
        <MdFilterList className="w-6 h-6" />
        <span className="font-semibold text-[20px] leading-8 text-black">
          Filter
        </span>
      </h3>
      <div>form</div>
    </aside>
  );
};

export default FilterAside