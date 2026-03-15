import { RxAvatar } from "react-icons/rx";
import { IoBagOutline } from "react-icons/io5";
import Container from "@/layout/Container";
import NavBar from "./components/NavBar";
import BurgerMenu from "./components/BurgerMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 bg-white fixed left-0 right-0 top-0 z-10">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-1">
            <BurgerMenu />
            <h1 className="text-base md:text-2xl leading-6 text-black font-medium">
              K-Shop
            </h1>
          </div>
          <NavBar />
          <div className="flex justify-center items-center gap-x-4">
            <Link href="/profile">
              <RxAvatar className="w-6 h-6" />
            </Link>
            <Link href="/cart">
              <IoBagOutline className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
