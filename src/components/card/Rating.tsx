import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  // Ensure rating is between 0 and 5, and handle invalid ratings
  const normalizedRating = Math.max(0, Math.min(rating, 5));
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 !== 0;

  // Create an array with valid length for full stars
  const starsArray = Array.from({ length: fullStars });

  return (
    <div className="flex gap-1 items-center">
      {starsArray.map((_, i) => (
        <FaStar key={i} className="text-yellow-500" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      <p>({normalizedRating.toFixed(1)})</p>{" "}
      {/* To format the rating to one decimal place */}
    </div>
  );
};
