"use client";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

type TFormInputProps<T> = {
  name: keyof T;
  id: string;
  placeholder: string;
  error?: string;
  type?: HTMLInputElement["type"];
};

const FormInput = <T extends Record<string, string>>(
  props: TFormInputProps<T>,
) => {
  const { name, id, placeholder, error, type = "text" } = props;
  const [isVisible, setIsVisible] = useState(false);

  return (
    <fieldset className="w-full">
      <div className="relative">
        <input
          id={id}
          name={name as string}
          placeholder={placeholder}
          type={type === "password" ? (isVisible ? "text" : type) : type}
          className="pb-3.5 border-b border-[#E8ECEF] pr-4 text-black text-base leading-6.5 w-full outline-none transition-colors duration-100 ease-in-out peer focus:border-black placeholder:text-[#6C7275]"
        />
        {type === "password" && (
          <button
            className="absolute top-0 right-0 cursor-pointer"
            type="button"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            <div className="relative">
              <LuEye
                className={`text-[#6C7275] w-6 h-6 absolute transition-opacity duration-150 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
              <LuEyeOff
                className={`text-[#6C7275] w-6 h-6 text-absolute transition-opacity duration-150 ${
                  !isVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </button>
        )}
      </div>
    </fieldset>
  );
};

export default FormInput;
