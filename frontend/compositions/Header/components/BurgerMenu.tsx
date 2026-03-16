"use client";
import { IoMenu } from "react-icons/io5";
import Button from "@/components/buttons/Button";

const BurgerMenu = () => {
  return (
    <Button className="inline-block md:hidden">
      <IoMenu className="w-6 h-6" />
    </Button>
  );
};

export default BurgerMenu;
