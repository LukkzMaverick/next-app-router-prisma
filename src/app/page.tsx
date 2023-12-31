import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import { fetchRestaurantsAndReviewCount } from "@/services/restaurant.service";

export default async function Home() {
  const restaurants = await fetchRestaurantsAndReviewCount();
  return (
    <div>
      <Header />
      <section className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </section>
    </div>
  );
}
