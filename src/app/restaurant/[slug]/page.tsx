import NotFoundError from "@/components/general/NotFoundError";
import Description from "@/components/restaurant/Description";
import Images from "@/components/restaurant/Images";
import Rating from "@/components/restaurant/Rating";
import ReservationCard from "@/components/restaurant/ReservationCard";
import RestaurantNavbar from "@/components/restaurant/RestaurantNavbar";
import Reviews from "@/components/restaurant/Reviews";
import Title from "@/components/restaurant/Title";
import { fetchRestaurantBySlug } from "@/services/restaurant.service";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export const metadata: Metadata = {
  title: "Restaurant Detail",
};

const RestaurantPage = async ({ params: { slug } }: Props) => {
  const restaurant = await fetchRestaurantBySlug(slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {restaurant ? (
          <>
            <RestaurantNavbar slug={slug} />
            <Title title={restaurant.name} />
            <Rating />
            <Description description={restaurant.description} />
            <Images images={restaurant.images} />
            <Reviews />
          </>
        ) : (
          <NotFoundError message="No Restaurants Found" />
        )}
      </div>
      <ReservationCard />
    </>
  );
};

export default RestaurantPage;
