import { ReviewCardType } from "@/services/restaurant.service";
import { calculateReviewRatingAverage } from "@/util";
import React from "react";
import Stars from "../general/Stars";

type Props = { reviews: ReviewCardType[] };

const Rating = ({ reviews }: Props) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{calculateReviewRatingAverage(reviews)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
};

export default Rating;
