import { ReviewCardType } from "@/services/restaurant.service";
import ReviewCard from "./ReviewCard";

type Props = {
  reviews: Array<ReviewCardType>;
};

const Reviews = ({ reviews }: Props) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        {`What ${reviews.length} ${
          reviews.length > 1 ? "people are saying" : "person is saying"
        }`}
      </h1>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
