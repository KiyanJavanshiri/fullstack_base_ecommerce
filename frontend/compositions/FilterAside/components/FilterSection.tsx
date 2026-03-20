import { ReactNode } from "react";

const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="mt-8">
      <h3 className="text-base leading-6.5 font-semibold text-black uppercase mb-4">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
};

export default FilterSection;
