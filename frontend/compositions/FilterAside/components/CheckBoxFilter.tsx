import { TFilterFields } from "@/utils/types";
import { FaCheck } from "react-icons/fa";
import FilterSection from "./FilterSection";

type TCheckBoxFilterProps<T extends keyof TFilterFields> = {
  title: string;
  name: T;
  options: TFilterFields[T];
  isSelected: (
    field: keyof TFilterFields,
    option: Required<TFilterFields>[T][number],
  ) => boolean;
  handleSelectFilter: (field: keyof TFilterFields, value: string) => void;
};

const CheckBoxFilter = <T extends keyof TFilterFields>(
  props: TCheckBoxFilterProps<T>,
) => {
  const { title, name, options, handleSelectFilter, isSelected } = props;

  return (
    <FilterSection title={title}>
      <ul className="flex flex-col gap-y-4">
        {options?.map((opt, i) => (
          <li key={i}>
            <label
              className="relative group flex justify-start items-center gap-x-3"
              htmlFor={`opt-${opt}`}
            >
              <input
                type="checkbox"
                className="absolute opacity-0"
                checked={isSelected(name, opt)}
                id={`opt-${opt}`}
                name={name}
                onChange={() => {
                  handleSelectFilter(name, opt);
                }}
              />
              <div
                className={`relative w-6 h-6 rounded-sm border border-black bg-white group-has-[input:checked]:bg-black`}
              >
                <FaCheck className="absolute top-1/2 left-1/2 -translate-1/2 text-white hidden group-has-[input:checked]:block" />
              </div>
              <span className="leading-5.5 text-sm font-medium text-black">
                {opt}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </FilterSection>
  );
};

export default CheckBoxFilter;
