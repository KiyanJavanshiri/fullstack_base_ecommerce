import Link from "next/link";
import Image from "next/image";

type TCategoryCardProps = {
  img: string;
  title: string;
  category: string;
  subCategory: string;
};

const CategoryCard = ({
  title,
  img,
  category,
  subCategory,
}: TCategoryCardProps) => {
  return (
    <div>
      <Link
        className="flex flex-col items-center gap-y-3"
        href={`/shop?category=${category}&subCategory=${subCategory}`}
      >
        <div className="relative w-38 aspect-square md:w-41.75">
          <Image
            src={img}
            alt={`${category} image`}
            priority
            fill
            className="object-cover rounded-full"
          />
        </div>
        <p className="text-sm leading-5.5 font-medium text-black capitalize">{title}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
