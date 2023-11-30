import { RestaurantSearchCard } from "@/services/restaurant.service";
import Link from "next/link";
import Price from "../Price";
import { calculateReviewRatingAverage } from "@/util";
import Stars from "../general/Stars";

type Props = {
  restaurant: RestaurantSearchCard;
};

const SearchRestaurantCard = ({
  restaurant: { slug, mainImage, name, cuisine, location, price, Review },
}: Props) => {
  const rating = calculateReviewRatingAverage(Review);
  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={mainImage} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={Review} />
          </div>
          <p className="ml-2 text-sm">
            {parseFloat(rating) >= 4.5 ? "Awesome" : ""}
          </p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchRestaurantCard;
