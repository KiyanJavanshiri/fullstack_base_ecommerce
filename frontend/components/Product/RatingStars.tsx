import { FaStar } from "react-icons/fa";

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-start items-center gap-x-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <FaStar className="w-4 h-4" key={i} />
      ))}
    </div>
  );
};

export default RatingStars