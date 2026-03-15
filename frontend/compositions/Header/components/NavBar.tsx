"use client";
import { usePathname } from "next/navigation";
import { PATHS } from "@/utils/links";
import Link from "next/link";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex justify-center items-center gap-x-10">
        {PATHS.map(({ title, path }, i) => (
          <li key={i}>
            <Link
              href={path}
              className={`text-sm leading-6 font-medium ${pathname === path ? "text-black" : "text-[#6C7275]"}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
