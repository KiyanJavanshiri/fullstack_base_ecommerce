"use client";
import { usePathname } from "next/navigation";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const BreadCrumb = () => {
  const pathname = usePathname();
  let path = "Home,";
  const pathnameLength = pathname.split("/").length;

  pathname
    .replaceAll("/", " ")
    .trim()
    .split(" ")
    .forEach(
      (subPath, i, arr) =>
        (path += subPath + (arr.length - 1 !== i ? "," : "")),
    );

  return (
    <nav>
      <ul className="flex justify-center items-center gap-x-4">
        {path.split(",").map((path, i, arr) => (
          <li key={i}>
            <Link
              href={path === "Home" ? "/" : `/${path}`}
              className="flex justify-center items-center gap-x-1"
            >
              <span
                className={`${path === pathname.split("/")[pathnameLength - 1] ? "text-black" : "text-gray-500"} leading-6 text-sm font-medium capitalize`}
              >
                {path}
              </span>
              {arr.length - 1 !== i && (
                <MdArrowForwardIos className="text-gray-500 w-3 h-3" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
