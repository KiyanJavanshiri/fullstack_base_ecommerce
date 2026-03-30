"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import Button from "../buttons/Button";

type NextPageButtonProps = {
  totalPages: number;
};

const NextPageButton = (props: NextPageButtonProps) => {
  const { totalPages } = props;
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handleChangePage = (action: "next" | "prev") => {
    const params = new URLSearchParams(searchParams);
    const newPage = action === "next" ? currentPage + 1 : currentPage - 1;

    params.set("page", String(newPage));
    router.push(`/shop?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex justify-center items-center gap-x-4">
      <Button
        onClick={() => handleChangePage("prev")}
        disabled={currentPage <= 1}
        className="p-2 rounded-sm bg-white border border-gray-300 hover:bg-gray-200 disabled:bg-gray-300"
      >
        <MdArrowBackIosNew className="text-gray-600 w-4 h-4" />
      </Button>
      <span className="leading-6.5 text-sm font-normal text-black">
        {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => handleChangePage("next")}
        disabled={currentPage >= totalPages}
        className="p-2 rounded-sm bg-white border border-gray-300 hover:bg-gray-200 disabled:bg-gray-300"
      >
        <MdArrowForwardIos className="text-gray-600 w-4 h-4" />
      </Button>
    </div>
  );
};

export default NextPageButton;
