import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
};

export default function Rating({ rating }: RatingProps) {
	const roundedRating = Math.round(rating);
	const MAX_RATING = 5;

	const yellowStars = Array(roundedRating).fill(0);
	const grayStarts = Array(MAX_RATING - roundedRating).fill(0);

	return (
		<div className="flex flex-row space-x-3">
			{yellowStars.map((_, index) => (
				<Star key={index} className="text-yellow-400 size-5" fill="yellow" />
			))}
			{grayStarts.map((_, index) => (
				<Star key={index} className="text-gray-500 size-5" fill="grey" />
			))}
		</div>
	);
}
