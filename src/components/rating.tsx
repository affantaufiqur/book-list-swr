import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
};

export default function Rating({ rating }: RatingProps) {
  const roundedRating = Math.round(rating);
  const MAX_RATING = 5;

  const yellowStars = Array(roundedRating).fill(0);
  const grayStars = Array(MAX_RATING - roundedRating).fill(0);

  return (
    <div className="flex flex-row space-x-3">
      {yellowStars.map((_, index) => (
        <Star key={index} className="size-5 text-yellow-400" fill="yellow" />
      ))}
      {grayStars.map((_, index) => (
        <Star key={index} className="size-5 text-gray-500" fill="grey" />
      ))}
    </div>
  );
}
