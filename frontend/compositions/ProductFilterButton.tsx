"use client";
import { useState } from "react";
import { MdFilterList } from "react-icons/md";
import Button from "@/components/buttons/Button";

const ProductFilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button
        onClick={handleFilterModal}
        className={`px-2.75 py-2  ${isOpen ? "bg-[#E8ECEF]" : "bg-white"} rounded-sm md:hidden`}
      >
        <MdFilterList className="w-6 h-6" />
      </Button>
    </>
  );
};

export default ProductFilterButton