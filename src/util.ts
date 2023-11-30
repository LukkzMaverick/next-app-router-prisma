import { Review } from "@prisma/client";
export const calculateReviewRatingAverage = (
  reviews: Array<Pick<Review, "id" | "rating">>
) => {
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  ).toFixed(2);
};
